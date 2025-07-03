import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthFilter } from './auth.filter';
import { JWT_SECRET, JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles.guard';
import { UserModule } from '../users/user.module';
import { SellerGuard } from './seller.guard';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthGuard, AuthFilter, RolesGuard, SellerGuard],
  exports: [AuthGuard, AuthFilter, RolesGuard, JwtModule, SellerGuard],
})
export class AuthModule {}
