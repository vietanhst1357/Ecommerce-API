import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateOrderDto {
    @IsDateString()
    @IsNotEmpty()
    orderDate: string;

    @IsNumber()
    @IsNotEmpty()
    orderStatus: number;

    @IsNumber()
    @IsNotEmpty()
    totalAmount: number;
}