import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
export class EditStaffDto {
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    firstName?: string;
    
    @IsString()
    @IsOptional()
    lastName?: string;

    @IsNumber()
    @IsOptional()
    deptId?: number;
    
    @IsDateString()
    @IsOptional()
    dateOfBirth?: string;
    
    @IsString()
    @IsOptional()
    address?: string;
    
    @IsString()
    @IsOptional()
    phone?: string;
    
    @IsDateString()
    @IsOptional()
    dateOfHire?: string;
    
    @IsNumber()
    @IsOptional()
    roleId?: number;
    
    @IsNumber()
    @IsOptional()
    statusId?: number;
    
    @IsNumber()
    @IsOptional()
    salary?: number;
}
