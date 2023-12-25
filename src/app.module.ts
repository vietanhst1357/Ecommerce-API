import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { StaffModule } from './staff/staff.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { DepartmentModule } from './department/department.module';
import { RoleModule } from './role/role.module';
import { StatusModule } from './status/status.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { AppController } from './app.controller';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        AuthModule,
        UserModule,
        PrismaModule,
        ProductModule,
        StaffModule,
        CategoryModule,
        SubCategoryModule,
        DepartmentModule,
        RoleModule,
        StatusModule,
        OrderModule,
        OrderDetailModule,
        ShippingAddressModule,
    ],
    controllers: [AppController]
})
export class AppModule {}
