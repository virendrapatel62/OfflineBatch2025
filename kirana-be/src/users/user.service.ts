import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from '../../generated/prisma';
import { create } from 'domain';
import { JWT_SECRET, JwtPayload } from 'src/auth/jwt.strategy';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    return {
      status: 'ok',
      message: 'Login successful',
      token: await this.generateJwt({
        id: user.id,
        name: user.name || 'Anonymous',
      }),
    };
  }

  // Generates a JWT token
  async generateJwt(payload: JwtPayload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: JWT_SECRET,
    });
  }

  // Optionally, you can verify a JWT token here (e.g., on login or protected routes)
  async verifyJwt(token: string): Promise<JwtPayload> {
    return this.jwtService.verify(token);
  }

  async getUsers() {
    return {
      users: await this.prisma.user.findMany(),
    };
  }

  createUser(user: createUserDto) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);

    return this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });
  }
}

export interface createUserDto {
  name: string;
  email: string;
  password: string;
}
