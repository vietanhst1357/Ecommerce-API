"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const order_type_1 = require("../helper/order.type");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllOrders(staff) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access order');
        }
        const orders = await this.prisma.order.findMany();
        if (!orders) {
            throw new common_1.ForbiddenException('Failed to get all orders');
        }
        return orders;
    }
    async getAllOrderByUserId(userId) {
        const orders = await this.prisma.order.findMany({
            where: {
                userId: userId,
            },
        });
        if (!orders) {
            throw new common_1.ForbiddenException('Failed to get the orders of the user');
        }
        return orders;
    }
    async getOrderById(userId, orderId) {
        const order = await this.prisma.order.findFirst({
            where: {
                id: orderId,
                userId: userId,
            },
        });
        if (!order) {
            throw new common_1.ForbiddenException('Failed to get the order');
        }
        return order;
    }
    async createOder(userId, dto) {
        const createdOrder = await this.prisma.order.create({
            data: {
                userId,
                ...dto,
            },
        });
        if (!createdOrder) {
            throw new common_1.ForbiddenException('Failed to create order');
        }
        return createdOrder;
    }
    async editOrder(staff, orderId, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access order');
        }
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId,
            },
        });
        if (!findOrder) {
            throw new common_1.ForbiddenException('The order is invalid');
        }
        const editedOrder = await this.prisma.order.update({
            where: {
                id: orderId,
            },
            data: {
                ...dto,
            },
        });
        if (!editedOrder) {
            throw new common_1.ForbiddenException('Failed to edit the order');
        }
        return editedOrder;
    }
    async cancelOrder(userId, orderId) {
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId
            }
        });
        if (findOrder?.orderStatus !== order_type_1.OrderStatus.PENDING || !findOrder) {
            throw new common_1.ForbiddenException(`Can't cancel an already processed or non-existing order`);
        }
        if (findOrder.userId !== userId) {
            throw new common_1.ForbiddenException('The user cannot access this order');
        }
        const canceledOrder = await this.prisma.order.update({
            where: {
                id: orderId,
                userId: userId
            },
            data: {
                orderStatus: order_type_1.OrderStatus.CANCELED
            }
        });
        if (!canceledOrder) {
            throw new common_1.ForbiddenException('Failed to cancel this order');
        }
    }
    async deleteOrder(staff, orderId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access order');
        }
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId
            }
        });
        if (!findOrder) {
            throw new common_1.ForbiddenException('The order is invalid');
        }
        const deletedOrder = await this.prisma.order.delete({
            where: {
                id: orderId
            }
        });
        const deleteOrderDetail = await this.prisma.orderDetail.deleteMany({
            where: {
                orderId: orderId
            }
        });
        if (!deletedOrder || !deleteOrderDetail) {
            throw new common_1.ForbiddenException('Failed to delete the order');
        }
        return true;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map