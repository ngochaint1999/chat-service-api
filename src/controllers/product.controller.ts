import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { CreateProduct } from 'src/types/Product';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductController {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // ... other methods
  @Get()
  async findAll() {
    return this.productRepository.find();
  }

  @Post()
  async create(@Body() createProduct: CreateProduct) {
    return this.productRepository.save(createProduct);
  }
}
