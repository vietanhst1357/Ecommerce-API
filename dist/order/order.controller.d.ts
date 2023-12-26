import { OrderService } from './order.service';
import { Staff } from '@prisma/client';
import { CreateOrderDto, EditOrderDto } from './dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getAllOrder(staff: Staff): Promise<{
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
    getOrderById(id: number, orderId: number): Promise<{
        id: number;
        userId: number;
        orderDate: Date;
        orderStatus: number;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createOrder(userId: number, dto: CreateOrderDto): Promise<{
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
