import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { EntityI } from "src/interface/Entity";
import { Order } from "./order.entity";

@Entity()
export class Product implements EntityI {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('int')
    quantity: number;

    @Column('float')
    unit_price: number;

    @ManyToOne(type => Order, order => order.id_product)
    @JoinColumn({ name: 'id_order' })
    id_order: number;
}