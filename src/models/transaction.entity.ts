import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    commerce: string;

    @Column('int')
    order: number;

    @Column({ length: 11 })
    reference: string;

    @Column('float')
    amount: number;

    @Column('date')
    date: Date;

    @Column()
    payment_method: string;
}