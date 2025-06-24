import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthenticatedRequest } from 'src/types/utils.types';
import { CreateOrderDto } from './order.dto';
import { OrderService } from './order.service';

@Controller('/orders')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  async getOrders(@Request() req: AuthenticatedRequest) {
    const orders = await this.orderService.getOrders(req.user.id);

    return { data: orders };
  }

  @Get(':id')
  async getOrder(
    @Param('id') id: string,
    @Request() req: AuthenticatedRequest,
  ) {
    const order = await this.orderService.getOrder(id, req.user.id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return { data: order };
  }

  @Post()
  async createOrder(
    @Request() req: AuthenticatedRequest,
    @Body() body: CreateOrderDto,
  ) {
    const order = await this.orderService.createOrder(req.user.id, body);

    return { data: order };
  }

  @Patch(':id/cancel')
  async cancelOrder(
    @Param('id') id: string,
    @Request() req: AuthenticatedRequest,
  ) {
    const order = await this.orderService.cancelOrder(id, req.user.id);
    return { data: order };
  }
}
