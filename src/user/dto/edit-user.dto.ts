import { IsOptional, IsString } from 'class-validator';

export class EditUserDto {
    @IsString()
    @IsOptional()
    firstName?: string;
    @IsString()
    @IsOptional()
    lastName?: string;
    @IsString()
    @IsOptional()
    address?: string;
    @IsString()
    @IsOptional()
    phone?: string;
}
