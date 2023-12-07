import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto, EditAddressDto } from './dto'

@Injectable()
export class ShippingAddressService {
    constructor(private prisma: PrismaService) {}

    async getAllAddressByUserId(userId: number) {
        const findAllAddresses = await this.prisma.shippingAddress.findMany({
            where: {
                userId: userId
            }
        });
        if(!findAllAddresses) {
            throw new ForbiddenException('Fail to get all shipping address by user id');
        }

        return findAllAddresses;
    }

    async createAddress(userId: number, dto: CreateAddressDto) {
        const addressCreated = await this.prisma.shippingAddress.create({
            data: {
                userId: userId,
                ...dto
            }
        });
        if (!addressCreated) {
            throw new ForbiddenException('Fail to create address');
        }

        return addressCreated;
    }

    async editAddress(userId: number, addressId: number, dto: EditAddressDto) {
        const findAddress = await this.prisma.shippingAddress.findFirst({
            where: {
                id: addressId
            }
        });
        if(!findAddress || findAddress.userId !== userId) {
            throw new ForbiddenException('The address is invalid');
        }

        const addressEdited = await this.prisma.shippingAddress.update({
            where: {
                id: addressId
            },
            data: {
                ...dto
            }
        });
        if(!addressEdited) {
            throw new ForbiddenException('Fail to update the address');
        }

        return addressEdited;
    }

    async deleteAddress(userId: number, addressId: number) {
        const findAddress = await this.prisma.shippingAddress.findFirst({
            where: {
                id: addressId
            }
        });
        if(!findAddress || findAddress.userId !== userId) {
            throw new ForbiddenException('The address is invalid');
        }

        await this.prisma.shippingAddress.delete({
            where: {
                id: addressId
            }
        });

        return true;
    }
}
