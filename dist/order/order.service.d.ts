import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateOrderDto, EditOrderDto } from './dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllOrders(staff: Staff): Promise<{
        id: number;
        userId: number;
        orderDate: Date;
        orderStatus: number;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getAllOrderByUserId(userId: number): Promise<{
        id: number;
        userId: number;
        orderDate: Date;
        orderStatus: number;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOrderById(userId: number, orderId: number): Promise<{
        id: number;
        userId: number;
        orderDate: Date;
        orderStatus: number;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createOder(userId: number, dto: CreateOrderDto): Promise<{
        id: number;
        userId: number;
        orderDate: Date;
        orderStatus: number;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editOrder(staff: Staff, orderId: number, dto: EditOrderDto): Promise<{
        id: number;
        userId: number;
        orderDate: Date;
        orderStatus: number;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    cancelOrder(userId: number, orderId: number): Promise<void>;
    deleteOrder(staff: Staff, orderId: number): Promise<boolean>;
}
