import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ShippingAddressService } from './shipping-address.service';
import { GetUser } from '../auth/decorator';
import { CreateAddressDto, EditAddressDto } from './dto';

@Controller('shipping-address')
export class ShippingAddressController {
    constructor(private shippingAddressService: ShippingAddressService) {}

    @Get('/get-all-address-by-id')
    getAllShippingAddressByUserId(@GetUser('id') userId: number) {
        return this.shippingAddressService.getAllAddressByUserId(userId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createAddress(@GetUser('id') userId: number, dto: CreateAddressDto) {
        return this.shippingAddressService.createAddress(userId, dto);
    }

    @Put(':id')
    editAddress(@GetUser('id') userId: number, @Param('id', ParseIntPipe) addressId: number, dto: EditAddressDto) {
        return this.shippingAddressService.editAddress(userId, addressId, dto);
    }

    @Delete(':id')
    deleteAddress(@GetUser('id') userId: number, @Param('id', ParseIntPipe) addressId: number) {
        return this.shippingAddressService.deleteAddress(userId, addressId);
    }
}
