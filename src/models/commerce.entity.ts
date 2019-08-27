import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EntityI } from "src/interface/Entity";


@Entity()
export class Commerce implements EntityI {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', unique: true, nullable: false })
    cmmid: string

    @Column({ type: 'text', unique: true, nullable: false })
    tax_id: string;

    @Column({ type: 'text', unique: true, nullable: false })
    name: string;

    @Column({ type: 'text', unique: true, nullable: false })
    public_key: string;

    @Column({ type: 'text', unique: true, nullable: false })
    private_key: string;

    @Column('int', { nullable: true })
    id_fee: number;

    @Column('int', { nullable: true })
    id_color: number;

    @Column('int', { nullable: true })
    id_route: number;

    @Column('int', { nullable: true })
    id_platform: number;

    @Column('int', { nullable: true })
    id_user: number;
}