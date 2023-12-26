import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto, EditAddressDto } from './dto';
export declare class ShippingAddressService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllAddressByUserId(userId: number): Promise<{
        id: number;
        userId: number;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        street: string;
        name: string;
    }[]>;
    createAddress(userId: number, dto: CreateAddressDto): Promise<{
        id: number;
        userId: number;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        street: string;
        name: string;
    }>;
    editAddress(userId: number, addressId: number, dto: EditAddressDto): Promise<{
        id: number;
        userId: number;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        street: string;
        name: string;
    }>;
    deleteAddress(userId: number, addressId: number): Promise<boolean>;
}
