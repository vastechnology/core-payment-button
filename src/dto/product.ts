import { ApiModelProperty } from '@nestjs/swagger';

export class ProductDTO {
    @ApiModelProperty()
    readonly quantity: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly unitPrice: number;
}