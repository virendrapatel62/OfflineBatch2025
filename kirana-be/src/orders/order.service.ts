import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        items: {
          select: {
            product: true,
            quantity: true,
            unitPrice: true,
            total: true,
          },
        },
      },
    });
  }

  async createOrder(userId: number, body: CreateOrderDto) {
    const { products, phone, address } = body;

    const quantityProductMap = products.reduce((acc, product) => {
      acc[product.id] = product.quantity;
      return acc;
    }, {});

    const productsData = await this.prisma.product.findMany({
      where: {
        id: { in: products.map((product) => product.id) },
      },
    });

    if (productsData.length !== products.length) {
      throw new NotFoundException('Some products not found');
    }

    const idProductMap = productsData.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {});

    const total = products.reduce((acc, product) => {
      const productData = idProductMap[product.id];
      return acc + productData.price * product.quantity;
    }, 0);

    return this.prisma.order.create({
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      data: {
        userId,
        items: {
          create: products.map((product) => ({
            productId: product.id,
            quantity: quantityProductMap[product.id],
            unitPrice: idProductMap[product.id].price,
            total: idProductMap[product.id].price * product.quantity,
          })),
        },
        total,
        phone,
        address,
      },
    });
  }

  async getOrder(id: string, userId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: Number(id), userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return order;
  }
  async cancelOrder(id: string, userId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: Number(id), userId },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return this.prisma.order.update({
      where: { id: Number(id), userId },
      data: { status: OrderStatus.CANCELLED },
    });
  }
}
