import { Transaction } from './../models/transaction.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Transaction
        ])
    ],
    providers: [TransactionService],
    controllers: [TransactionController]
})
export class TransactionModule {}