import { SubCategoryService } from './sub-category.service';
import { Staff } from '@prisma/client';
import { CreateSubCategoryDto, EditSubCategoryDto } from './dto';
export declare class SubCategoryController {
    private subCategoryService;
    constructor(subCategoryService: SubCategoryService);
    getAllSubCategories(): Promise<{
        id: number;
        subcategoryName: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getSubCategoryById(subCategoryId: number): Promise<{
        id: number;
        subcategoryName: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createSubCategory(staff: Staff, dto: CreateSubCategoryDto): Promise<{
        id: number;
        subcategoryName: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateSubCategory(staff: Staff, subCategoryId: number, dto: EditSubCategoryDto): Promise<{
        id: number;
        subcategoryName: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    daleteSubCategory(staff: Staff, subCategoryId: number): Promise<boolean>;
}
