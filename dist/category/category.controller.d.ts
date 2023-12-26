import { CategoryService } from './category.service';
import { Staff } from '@prisma/client';
import { CreateCategoryDto, EditCategoryDto } from './dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<{
        id: number;
        categoryName: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCategoryById(categoryId: number): Promise<{
        id: number;
        categoryName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createNewCategory(staff: Staff, dto: CreateCategoryDto): Promise<{
        id: number;
        categoryName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCategory(staff: Staff, categoryId: number, dto: EditCategoryDto): Promise<void>;
    deleteCategory(staff: Staff, categoryId: number): Promise<boolean>;
}
