"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const product_module_1 = require("./product/product.module");
const staff_module_1 = require("./staff/staff.module");
const category_module_1 = require("./category/category.module");
const sub_category_module_1 = require("./sub-category/sub-category.module");
const department_module_1 = require("./department/department.module");
const role_module_1 = require("./role/role.module");
const status_module_1 = require("./status/status.module");
const order_module_1 = require("./order/order.module");
const order_detail_module_1 = require("./order-detail/order-detail.module");
const shipping_address_module_1 = require("./shipping-address/shipping-address.module");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            product_module_1.ProductModule,
            staff_module_1.StaffModule,
            category_module_1.CategoryModule,
            sub_category_module_1.SubCategoryModule,
            department_module_1.DepartmentModule,
            role_module_1.RoleModule,
            status_module_1.StatusModule,
            order_module_1.OrderModule,
            order_detail_module_1.OrderDetailModule,
            shipping_address_module_1.ShippingAddressModule,
        ],
        controllers: [app_controller_1.AppController]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map