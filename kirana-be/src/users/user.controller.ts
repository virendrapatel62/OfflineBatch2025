import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { AuthenticatedRequest } from 'src/types/utils.types';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  getUserProfile(@Req() req: AuthenticatedRequest) {
    const data = this.userService.getUserProfile(req.user.id);

    if (!data) {
      throw new NotFoundException('User not found');
    }

    return data;
  }

  @Get('/profile/:id')
  @UseGuards(AuthGuard)
  async getUserProfileById(@Param('id') id: string) {
    const data = await this.userService.getUserProfile(parseInt(id));

    if (!data) {
      throw new NotFoundException('User not found');
    }

    return data;
  }
}
