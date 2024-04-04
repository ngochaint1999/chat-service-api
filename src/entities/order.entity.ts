import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true, length: 255 })
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @IsNotEmpty()
  code: string;

  @Column({ nullable: true, length: 255 })
  description: string;

  @Column({ default: 0 })
  amountToBePaid: number;

  @Column()
  paymentMethod: string;

  @Column({ nullable: true })
  paymentStatus: string;

  @Column({ nullable: true })
  createById: string;

  @Column({ nullable: true })
  createAt: string;
}
