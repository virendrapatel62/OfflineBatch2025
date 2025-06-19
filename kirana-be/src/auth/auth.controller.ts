import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { CreateUserDto, LoginBodyDto } from './auth.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() body: LoginBodyDto) {
    if (!body || !body?.email || !body?.password) {
      throw new BadRequestException('Email and password are required');
    }

    return await this.userService.login(body.email, body.password);
  }

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    if (!body || !body.name || !body.email || !body.password) {
      throw new BadRequestException('Name, email and password are required');
    }

    return this.userService.createUser(body);
  }
}
