import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { ICreateCategory } from 'src/types/Category';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // ... other methods
  @Get()
  async findAll() {
    return this.categoryRepository.find();
  }

  @Post()
  async create(@Body() createCategory: ICreateCategory) {
    return this.categoryRepository.save(createCategory);
  }
}
