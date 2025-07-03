import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { JWT_SECRET } from './constants';
import { JwtPayload } from './jwt.strategy';
import { AuthGuard } from './auth.guard';

@Injectable()
export class SellerGuard extends AuthGuard {
  constructor(
    jwtService: JwtService,
    reflector: Reflector,
    prisma: PrismaService,
  ) {
    super(jwtService, reflector, prisma);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = await super.canActivate(context);

    if (!result) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const user = request['user'];

    if (user.role?.toUpperCase() !== 'SELLER') {
      throw new UnauthorizedException(
        'You are not authorized to access this resource',
      );
    }

    console.log('Seller', user);

    return true;
  }
}
