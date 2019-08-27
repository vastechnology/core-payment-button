import { Commerce } from './commerce.entity';
import { EntityI } from './../interface/Entity';
import { TransactionI } from './../interface/transaction.interface';
import { Status } from './../dto/Enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Transaction{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Status, default: Status.pendiente })
    status: Status;

    @Column({ type: 'text', nullable: true })
    reference: string;

    @Column({ type: 'text', nullable: true })
    external_reference: string;

    @Column('date', { nullable: false })
    date: Date;

    @Column('int', { nullable: true })
    id_platform_commerce: number;

    @Column('int', { nullable: true })
    id_commerce_fee: number;

    @OneToOne(type => Order)
    @JoinColumn({ name: 'id_order' })
    id_order: number;

    @OneToOne(type => Commerce)
    @JoinColumn({ name: 'id_commerce'})
    id_commerce: number;
}