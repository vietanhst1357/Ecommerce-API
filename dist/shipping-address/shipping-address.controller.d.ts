import { ShippingAddressService } from './shipping-address.service';
import { CreateAddressDto, EditAddressDto } from './dto';
export declare class ShippingAddressController {
    private shippingAddressService;
    constructor(shippingAddressService: ShippingAddressService);
    getAllShippingAddressByUserId(userId: number): Promise<{
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
