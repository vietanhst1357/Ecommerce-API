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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCategory() {
        const categories = await this.prisma.category.findMany();
        if (!categories) {
            throw new common_1.ForbiddenException('Failed to get all categories');
        }
        return categories;
    }
    async getCategoryById(categoryId) {
        const category = await this.prisma.category.findUnique({
            where: {
                id: categoryId
            }
        });
        if (!category) {
            throw new common_1.ForbiddenException('Failed to get category by id');
        }
        return category;
    }
    async createCategory(staff, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access categories');
        }
        const categoryCreated = await this.prisma.category.create({
            data: dto
        });
        if (!categoryCreated) {
            throw new common_1.ForbiddenException('Failed to create a new category');
        }
        return categoryCreated;
    }
    async editCategory(staff, categoryId, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access categories');
        }
        const findCategory = await this.prisma.category.findFirst({
            where: {
                id: categoryId
            }
        });
        if (!findCategory) {
            throw new common_1.NotFoundException('The category is invalid');
        }
        const editedCategory = await this.prisma.category.update({
            where: {
                id: categoryId
            },
            data: {
                ...dto
            }
        });
        if (!editedCategory) {
            throw new common_1.ForbiddenException('Failed to update category');
        }
    }
    async deleteCategory(staff, categoryId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access categories');
        }
        const findCategory = await this.prisma.category.findUnique({
            where: {
                id: categoryId
            }
        });
        if (!findCategory) {
            throw new common_1.ForbiddenException('The category is invalid');
        }
        const deletedCategory = await this.prisma.category.delete({
            where: {
                id: categoryId
            }
        });
        if (!deletedCategory) {
            throw new common_1.ForbiddenException('Failed to delete the category');
        }
        return true;
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map