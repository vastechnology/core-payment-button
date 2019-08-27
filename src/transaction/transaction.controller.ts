import { TransactionService } from './transaction.service';
import { TransactionDTO } from '../dto/transaction';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

@ApiUseTags('transaction')
@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService){}

    @Get()
    @ApiResponse({ status: 200, description: 'Get all transactions'})
    getAllTransaction(): Object {
        return this.transactionService.findAllTransaction();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Get a transaction'})
    getTransaction(@Param('id') id_transaction: number): Object {
        return this.transactionService.findTransaction(id_transaction);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create success new transaction'})
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    createTransaction(@Body() transaction: TransactionDTO): Object {
        return this.transactionService.createTransaction(transaction);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'Update success transaction'})
    updateTransaction(@Param('id') id_transaction: number,@Body() update: TransactionDTO): Object {
        return this.transactionService.updateTransaction(id_transaction, update);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Delete success transaction'})
    deleteTransaction(@Param('id') id_transaction: number): Object {
        return this.transactionService.deleteTransaction(id_transaction);
    };
}
