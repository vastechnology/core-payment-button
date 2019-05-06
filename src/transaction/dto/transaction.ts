import { ApiModelProperty } from '@nestjs/swagger';

export class TransactionDTO {

    @ApiModelProperty()
    readonly commerce: string;

    @ApiModelProperty()
    readonly order: number;

    @ApiModelProperty()
    readonly reference: string;

    @ApiModelProperty()
    readonly amount: number;

    @ApiModelProperty()
    readonly date: Date;

    @ApiModelProperty()
    readonly payment_method: string;
}