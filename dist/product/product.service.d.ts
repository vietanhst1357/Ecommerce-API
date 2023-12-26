import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, EditProductDto } from './dto';
import { Staff } from '@prisma/client';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllProducts(): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        subcategoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProductById(productId: number): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        subcategoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createProduct(staff: Staff, dto: CreateProductDto): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        subcategoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editProduct(staff: Staff, productId: number, dto: EditProductDto): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        subcategoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteProduct(staff: Staff, productId: number): Promise<boolean>;
}
