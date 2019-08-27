import { EntityI } from './../interface/Entity';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class User implements EntityI {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: false })
    username: string;

    @Column('text', { nullable: false })
    password: string;

    @Column('int', { nullable: false })
    id_privilegio: number;
}