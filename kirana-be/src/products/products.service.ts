import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';
import { User } from 'generated/prisma';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto, user: User) {
    const existingProduct = await this.prisma.product.findFirst({
      where: {
        name: data.name,
        isActive: true,
        price: data.price,
        discount: data.discount || 0,
        unit: String(data.unit || 'pcs').toUpperCase(),
        category: data.category || 'other',
        userId: user.id,
      },
    });

    if (existingProduct) {
      throw new BadRequestException('Product already exists');
    }

    return this.prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
        isActive: true,
        images: data.images,
        discount: data.discount || 0,
        unit: String(data.unit || 'pcs').toUpperCase(),
        category: data.category || 'other',
        userId: user.id,
      },
    });
  }

  async findAll(query: QueryProductDto) {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where: {
          isActive: true,
        },
        skip,
        take: Number(limit),
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.product.count({
        where: {
          isActive: true,
        },
      }),
    ]);

    const productsWithSellPrice = products.map((product) => ({
      ...product,
      sellPrice: product.price * (1 - (product.discount || 0) / 100),
    }));

    return {
      data: productsWithSellPrice,
      meta: {
        page: Number(page),
        limit: Number(limit),
        total: Number(total),
        totalPages: Math.ceil(Number(total) / Number(limit)),
        hasNext: page < Math.ceil(Number(total) / Number(limit)),
        hasPrev: page > 1,
      },
    };
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findFirst({
      where: {
        id,
        isActive: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return {
      ...product,
      sellPrice: product.price * (1 - (product.discount || 0) / 100),
    };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // Check if product exists
    await this.findOne(id);

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }
}
