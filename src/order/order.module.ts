import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from 'src/models/order.entity';
import { OrderController } from './order.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order
    ])
  ],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
