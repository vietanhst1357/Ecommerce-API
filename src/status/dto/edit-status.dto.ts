import { IsString, IsOptional } from 'class-validator';

export class EditStatusDto {
    @IsString()
    @IsOptional()
    statusName?: string;
}