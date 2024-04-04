import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Product } from './product.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, length: 255 })
  @IsNotEmpty()
  name: string;

  @Column({ default: 0 })
  productCount: number;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
