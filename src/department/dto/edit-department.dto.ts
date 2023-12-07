import { IsOptional, IsString } from 'class-validator';

export class EditDepartmentDto {
    @IsString()
    @IsOptional()
    name?: string;
}