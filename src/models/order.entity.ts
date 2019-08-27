import { Product } from './product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { EntityI } from "src/interface/Entity";
import { Commerce } from "./commerce.entity";

@Entity()
export class Order implements EntityI {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date', { nullable: false })
    date: Date;

    @Column('float')
    amount: number;

    @Column({ type: 'text', nullable: true })
    currency: string;

    @Column({ type: 'text', nullable: true })
    external_reference: number;

    @OneToOne(type => Commerce)
    @JoinColumn({ name: 'id_commerce'})
    id_commerce: number;

    @Column('int', { nullable: true })
    id_customer: number;

    @OneToMany(type => Product, product => product.id_order)
    @JoinColumn({ name: 'id_product' })
    id_product: Product[];
}