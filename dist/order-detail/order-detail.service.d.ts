import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateOrderDetailDto, EditOrderDetailDto } from './dto';
export declare class OrderDetailService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllOrderDetailByOrderId(userId: number, orderId: number): Promise<void>;
    createOrderDetail(dto: CreateOrderDetailDto): Promise<void>;
    editOrderDetailByOrderId(staff: Staff, orderDetailId: number, dto: EditOrderDetailDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deteleOrderDetail(orderDetailId: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
