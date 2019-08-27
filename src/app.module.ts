import { TransactionModule } from './transaction/transaction.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CommerceController } from './commerce/commerce.controller';
import { CommerceModule } from './commerce/commerce.module';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TransactionModule,
    CommerceModule,
    OrderModule,
    ProductModule,
    UserModule
  ],
  controllers: [AppController, TransactionController, CommerceController, OrderController, ProductController, UserController],
  providers: [AppService, TransactionService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
