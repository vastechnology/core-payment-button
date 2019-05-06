import { Transaction } from './../models/transaction.entity';
import { TransactionI } from './interface/transaction.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction) 
        private readonly transactionModel: Repository<Transaction>
    ){}

    async findAllTransaction(): Promise<Transaction[]>{
        try {
            return await this.transactionModel.find();
        } catch (error) {
            return error;
        }
    }

    async findTransaction(id: number): Promise<Transaction>{
        try {
            return await this.transactionModel.findOne({ id })
        } catch (error) {
            return error;
        }
    }

    async createTransaction(transaction: TransactionI){
        try {
            const newTransaction = await this.transactionModel.save(transaction);
            return newTransaction;
        } catch (error) {
            return error;
        }
    }

    async updateTransaction(id: number, update?: TransactionI): Promise<any>{
        try {
            return await this.transactionModel.update({ id }, update)
            .then((response) => response)
            .catch((error) => error);
        } catch (error) {
            return error;
        }
    }

    async deleteTransaction(id: number): Promise<DeleteResult>{
        try {
            return await this.transactionModel.delete({ id });
        } catch (error) {
            return error;
        }
    }
}
