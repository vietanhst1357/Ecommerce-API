import { IsOptional, IsNumber } from 'class-validator'

export class EditOrderDto {

    @IsNumber()
    @IsOptional()
    orderStatus?: number;

    @IsNumber()
    @IsOptional()
    totalAmount?: number;
    
}