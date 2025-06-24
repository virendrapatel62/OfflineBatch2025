import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty({
    description: 'The id of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'The quantity of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
export class CreateOrderDto {
  @ApiProperty({
    description: 'The ids of the products',
    example: [
      {
        id: 1,
        quantity: 1,
      },
    ],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  products: CreateOrderItemDto[];

  @ApiProperty({
    description: 'The phone number of the user',
    example: '1234567890',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'The address of the user',
    example: '123 Main St, Anytown, USA',
  })
  @IsNotEmpty()
  @IsString()
  address: string;
}
