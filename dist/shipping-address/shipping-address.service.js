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
exports.ShippingAddressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ShippingAddressService = class ShippingAddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllAddressByUserId(userId) {
        const findAllAddresses = await this.prisma.shippingAddress.findMany({
            where: {
                userId: userId
            }
        });
        if (!findAllAddresses) {
            throw new common_1.ForbiddenException('Fail to get all shipping address by user id');
        }
        return findAllAddresses;
    }
    async createAddress(userId, dto) {
        const addressCreated = await this.prisma.shippingAddress.create({
            data: {
                userId: userId,
                ...dto
            }
        });
        if (!addressCreated) {
            throw new common_1.ForbiddenException('Fail to create address');
        }
        return addressCreated;
    }
    async editAddress(userId, addressId, dto) {
        const findAddress = await this.prisma.shippingAddress.findFirst({
            where: {
                id: addressId
            }
        });
        if (!findAddress || findAddress.userId !== userId) {
            throw new common_1.ForbiddenException('The address is invalid');
        }
        const addressEdited = await this.prisma.shippingAddress.update({
            where: {
                id: addressId
            },
            data: {
                ...dto
            }
        });
        if (!addressEdited) {
            throw new common_1.ForbiddenException('Fail to update the address');
        }
        return addressEdited;
    }
    async deleteAddress(userId, addressId) {
        const findAddress = await this.prisma.shippingAddress.findFirst({
            where: {
                id: addressId
            }
        });
        if (!findAddress || findAddress.userId !== userId) {
            throw new common_1.ForbiddenException('The address is invalid');
        }
        await this.prisma.shippingAddress.delete({
            where: {
                id: addressId
            }
        });
        return true;
    }
};
exports.ShippingAddressService = ShippingAddressService;
exports.ShippingAddressService = ShippingAddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShippingAddressService);
//# sourceMappingURL=shipping-address.service.js.map