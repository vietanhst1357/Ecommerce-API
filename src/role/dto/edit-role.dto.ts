import { IsOptional, IsString } from 'class-validator';

export class EditRoleDto {
    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    description?: string;
}
