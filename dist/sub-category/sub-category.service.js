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
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const guard_1 = require("../auth/guard");
let SubCategoryService = class SubCategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllSubCategory() {
        const subCategories = await this.prisma.subCategory.findMany();
        if (!subCategories) {
            throw new common_1.ForbiddenException('Failed to get all subcategories');
        }
        return subCategories;
    }
    async getSubCategoryById(subCategoryId) {
        const subCategory = await this.prisma.subCategory.findFirst({
            where: {
                id: subCategoryId
            }
        });
        if (!subCategory) {
            throw new common_1.ForbiddenException('Failed to get subcategory');
        }
        return subCategory;
    }
    async createSubCategory(staff, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException("The staff cannot access subcategory");
        }
        const createdSubcategory = await this.prisma.subCategory.create({
            data: dto
        });
        if (!createdSubcategory) {
            throw new common_1.ForbiddenException('Faileded to create a subcategory');
        }
        return createdSubcategory;
    }
    async editSubCategory(staff, subCategoryId, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException("The staff cannot access subcategory");
        }
        const findSubCategory = await this.prisma.subCategory.findFirst({
            where: {
                id: subCategoryId
            }
        });
        if (!findSubCategory) {
            throw new common_1.ForbiddenException('The Subcategory is invalid');
        }
        const editedSubCategory = await this.prisma.subCategory.update({
            where: {
                id: subCategoryId
            },
            data: {
                ...dto
            }
        });
        if (!editedSubCategory) {
            throw new common_1.ForbiddenException('Failed to update subcategory');
        }
        return editedSubCategory;
    }
    async deleteSubCategory(staff, subCategoryId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException("The staff cannot access subcategory");
        }
        const findSubCategory = await this.prisma.subCategory.findFirst({
            where: {
                id: subCategoryId
            }
        });
        if (!findSubCategory) {
            throw new common_1.ForbiddenException('The Subcategory is invalid');
        }
        const deletedSubCategory = await this.prisma.subCategory.delete({
            where: {
                id: subCategoryId
            }
        });
        if (!deletedSubCategory) {
            throw new common_1.ForbiddenException('Failed to delete subcategory');
        }
        return true;
    }
};
exports.SubCategoryService = SubCategoryService;
exports.SubCategoryService = SubCategoryService = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubCategoryService);
//# sourceMappingURL=sub-category.service.js.map