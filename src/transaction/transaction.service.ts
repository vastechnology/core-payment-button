import { TransactionDTO } from './../dto/transaction';
import { Status } from 'src/dto/Enum';
import { Transaction } from './../models/transaction.entity';
import { TransactionI } from '../interface/transaction.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Commerce } from 'src/models/commerce.entity';

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

    async createTransaction(transaction: TransactionDTO){
        try {
            
            let insert: TransactionI = {
                reference: '',
                external_reference: '',
                id_commerce: 1,
                id_commerce_fee: 1,
                id_orden: 1,
                id_platform_commerce: 1,
                status: Status.aprobado,
                date: new Date()
            };
            const newTransaction = await this.transactionModel.save(insert);
            return newTransaction;
        } catch (error) {
            return error;
        }
    }

    async updateTransaction(id: number, update?: Object): Promise<UpdateResult>{
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
