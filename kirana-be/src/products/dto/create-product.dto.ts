import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  MaxLength,
  IsArray,
  IsNotEmpty,
  IsDefined,
  Max,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Rice 1kg',
    maxLength: 255,
  })
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'The images of the product',
  })
  @IsDefined() // ❗ This ensures the field exists
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  images: string[];

  @ApiProperty({
    description: 'The price of the product in cents',
    example: 120,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'The discount of the product in percent',
    example: 20,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @Max(100)
  discount?: number;

  @ApiProperty({
    description: 'Optional description of the product',
    required: false,
    maxLength: 1000,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @ApiProperty({
    description: 'The unit of the product',
    example: 'kg',
  })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiProperty({
    description: 'The category of the product',
    example: 'Food',
  })
  @IsOptional()
  @IsString()
  category?: string;
}
