import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDetailDto {
    @IsNumber()
    @IsNotEmpty()
    orderId: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

}
