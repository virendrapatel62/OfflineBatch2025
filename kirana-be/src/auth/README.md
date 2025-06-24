# Authentication System

This module provides a comprehensive authentication system for the Kirana backend application.

## Components

### 1. AuthFilter (`auth.filter.ts`)

Handles authentication exceptions and provides proper error responses for:

- Invalid JWT tokens
- Expired tokens
- Unauthorized access
- General HTTP exceptions

### 2. AuthGuard (`auth.guard.ts`)

Protects routes by validating JWT tokens. It:

- Extracts Bearer tokens from Authorization header
- Validates JWT tokens
- Attaches user information to the request object

### 3. RolesGuard (`roles.guard.ts`)

Provides role-based access control using the `@Roles()` decorator.

### 4. CurrentUser Decorator (`current-user.decorator.ts`)

Easily extract the current authenticated user from the request.

## Usage Examples

### Protecting Routes with Authentication

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('products')
@UseGuards(AuthGuard) // Protect all routes in this controller
export class ProductsController {
  @Get()
  async getAllProducts() {
    // This route requires authentication
  }
}
```

### Role-Based Access Control

```typescript
import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard, RolesGuard, Roles } from '../auth';
import { Role } from '../auth/roles.guard';

@Controller('products')
@UseGuards(AuthGuard, RolesGuard)
export class ProductsController {
  @Post()
  @Roles(Role.SELLER) // Only sellers can create products
  async createProduct() {
    // This route requires SELLER role
  }
}
```

### Getting Current User

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard, CurrentUser } from '../auth';

@Controller('profile')
@UseGuards(AuthGuard)
export class ProfileController {
  @Get()
  async getProfile(@CurrentUser() user) {
    // user contains the JWT payload
    return { userId: user.userId, name: user.name };
  }
}
```

### Global Exception Filter

To use the AuthFilter globally, add it to your main.ts:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthFilter } from './auth/auth.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AuthFilter());
  await app.listen(3000);
}
bootstrap();
```

## Error Responses

The AuthFilter provides consistent error responses:

```json
{
  "statusCode": 401,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/protected-route",
  "message": "Invalid token",
  "error": null
}
```

## Security Notes

1. **JWT Secret**: Currently using a hardcoded secret. In production, use environment variables:

   ```typescript
   secret: process.env.JWT_SECRET;
   ```

2. **Token Expiration**: Tokens expire after 24 hours by default. Adjust in `auth.module.ts`.

3. **Role Validation**: Ensure user roles are properly validated in your database.

## Available Roles

- `USER`: Regular user
- `SELLER`: Seller with additional privileges
