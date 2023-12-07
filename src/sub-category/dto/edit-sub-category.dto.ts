import { IsNumber, IsOptional, IsString } from "class-validator";

export class EditSubCategoryDto {
    @IsOptional()
    @IsString()
    subcategoryName?: string;

    @IsOptional()
    @IsNumber()
    categoryId?: number;
}