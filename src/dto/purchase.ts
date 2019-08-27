import { ApiModelProperty } from '@nestjs/swagger';

export class PurchaseDTO {
    @ApiModelProperty()
    readonly firstName?: string;

    @ApiModelProperty()
    readonly secondName?: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly phoneNumber: string;

    @ApiModelProperty()
    readonly recurring: boolean;

    @ApiModelProperty()
    readonly currency: string;

    @ApiModelProperty()
    readonly reference: string;
}