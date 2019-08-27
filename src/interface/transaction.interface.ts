import { Commerce } from './../models/commerce.entity';
import { Status } from 'src/dto/Enum';

export interface TransactionI {
    status: Status;

    reference: string;

    external_reference: string;

    date: Date;

    id_platform_commerce: number;

    id_commerce_fee: number;

    id_orden: number;

    id_commerce: number;
}