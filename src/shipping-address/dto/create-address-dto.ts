import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    street: string;
    @IsNotEmpty()
    @IsString()
    city: string;
    @IsNotEmpty()
    @IsString()
    state: string;
    @IsNotEmpty()
    @IsString()
    country: string;
    @IsNotEmpty()
    @IsString()
    postalCode: string;
    @IsNotEmpty()
    @IsString()
    phone: string;
}