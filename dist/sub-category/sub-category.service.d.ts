import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateSubCategoryDto, EditSubCategoryDto } from './dto';
export declare class SubCategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllSubCategory(): Promise<{
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
    editSubCategory(staff: Staff, subCategoryId: number, dto: EditSubCategoryDto): Promise<{
        id: number;
        subcategoryName: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteSubCategory(staff: Staff, subCategoryId: number): Promise<boolean>;
}
