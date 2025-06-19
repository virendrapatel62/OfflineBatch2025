import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './users/user.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UploadModule } from './upload/upload.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UserModule, PrismaModule, JwtModule, UploadModule, ProductsModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService, JwtStrategy, JwtService],
})
export class AppModule {}
