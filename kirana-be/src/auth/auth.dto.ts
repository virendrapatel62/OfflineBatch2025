import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginBodyDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'shahwat@test.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password@123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Shahwat',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'shahwat@test.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password@123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
