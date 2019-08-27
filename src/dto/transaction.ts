import { ApiModelProperty } from '@nestjs/swagger';
import { PurchaseDTO } from './purchase';
import { ProductDTO } from './product';

export class TransactionDTO {

    @ApiModelProperty()
    readonly purchase: PurchaseDTO;

    @ApiModelProperty({ type: [ProductDTO]})
    readonly product: ProductDTO[];
}