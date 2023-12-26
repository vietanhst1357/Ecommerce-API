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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingAddressController = void 0;
const common_1 = require("@nestjs/common");
const shipping_address_service_1 = require("./shipping-address.service");
const decorator_1 = require("../auth/decorator");
const dto_1 = require("./dto");
let ShippingAddressController = class ShippingAddressController {
    constructor(shippingAddressService) {
        this.shippingAddressService = shippingAddressService;
    }
    getAllShippingAddressByUserId(userId) {
        return this.shippingAddressService.getAllAddressByUserId(userId);
    }
    createAddress(userId, dto) {
        return this.shippingAddressService.createAddress(userId, dto);
    }
    editAddress(userId, addressId, dto) {
        return this.shippingAddressService.editAddress(userId, addressId, dto);
    }
    deleteAddress(userId, addressId) {
        return this.shippingAddressService.deleteAddress(userId, addressId);
    }
};
exports.ShippingAddressController = ShippingAddressController;
__decorate([
    (0, common_1.Get)('/get-all-address-by-id'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShippingAddressController.prototype, "getAllShippingAddressByUserId", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], ShippingAddressController.prototype, "createAddress", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, dto_1.EditAddressDto]),
    __metadata("design:returntype", void 0)
], ShippingAddressController.prototype, "editAddress", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ShippingAddressController.prototype, "deleteAddress", null);
exports.ShippingAddressController = ShippingAddressController = __decorate([
    (0, common_1.Controller)('shipping-address'),
    __metadata("design:paramtypes", [shipping_address_service_1.ShippingAddressService])
], ShippingAddressController);
//# sourceMappingURL=shipping-address.controller.js.map