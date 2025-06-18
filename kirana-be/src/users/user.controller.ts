import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService, createUserDto } from './user.service';

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
}
