import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';

class LoginBody {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

@Controller('/auth')
export class AuthController {
  @Post('/login')
  async login(@Body() body: LoginBody) {
    if (!body?.email || !body?.password) {
      throw new BadRequestException('Email and password are required');
    }

    return {
      status: 'ok',
      message: 'Login successful',
    };
  }
}
