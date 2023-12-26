import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto, EditOrderDetailDto } from './dto';
import { Staff } from '@prisma/client';
export declare class OrderDetailController {
    private orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    getAllOrderDetailByOrderId(userId: number, orderId: number): Promise<void>;
    createOrderDetail(dto: CreateOrderDetailDto): Promise<void>;
    editOrderDetailByOrderId(staff: Staff, orderDetailId: number, dto: EditOrderDetailDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteOrderDetail(orderDetailId: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
