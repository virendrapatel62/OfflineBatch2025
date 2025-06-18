import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';
import { createUserDto, UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';

class LoginBody {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() body: LoginBody) {
    if (!body || !body?.email || !body?.password) {
      throw new BadRequestException('Email and password are required');
    }

    return await this.userService.login(body.email, body.password);
  }

  @Post('/register')
  async register(@Body() body: createUserDto) {
    if (!body || !body.name || !body.email || !body.password) {
      throw new BadRequestException('Name, email and password are required');
    }

    return this.userService.createUser(body);
  }
}
