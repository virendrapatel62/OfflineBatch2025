import { Controller, Get } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

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
