import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateCategoryDto, EditCategoryDto } from './dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCategory(): Promise<{
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
    createCategory(staff: Staff, dto: CreateCategoryDto): Promise<{
        id: number;
        categoryName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editCategory(staff: Staff, categoryId: number, dto: EditCategoryDto): Promise<void>;
    deleteCategory(staff: Staff, categoryId: number): Promise<boolean>;
}
