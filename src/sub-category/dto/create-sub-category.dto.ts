import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateSubCategoryDto {
    @IsString()
    @IsNotEmpty()
    subcategoryName: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}