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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DepartmentService = class DepartmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllDepartments(staff) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access department');
        }
        const departments = await this.prisma.department.findMany();
        if (!departments) {
            throw new common_1.ForbiddenException('Failed to get all departments');
        }
        return departments;
    }
    async getDepartmentById(staff, departmentId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access department');
        }
        const department = await this.prisma.department.findFirst({
            where: {
                id: departmentId,
            },
        });
        if (!department) {
            throw new common_1.ForbiddenException('Failed to get department by id');
        }
        return department;
    }
    async createDepartment(staff, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access department');
        }
        const createdDepartment = await this.prisma.department.create({
            data: dto,
        });
        if (!createdDepartment) {
            throw new common_1.ForbiddenException('Failed to create a department');
        }
        return createdDepartment;
    }
    async editDepartment(staff, departmentId, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access department');
        }
        const findDepartment = await this.prisma.department.findFirst({
            where: {
                id: departmentId
            }
        });
        if (!findDepartment) {
            throw new common_1.ForbiddenException('The Department is invalid');
        }
        const editedDepartment = await this.prisma.department.update({
            where: {
                id: departmentId
            },
            data: {
                ...dto
            }
        });
        if (!editedDepartment) {
            throw new common_1.ForbiddenException('Failed to update the department');
        }
        return editedDepartment;
    }
    async deleteDepartment(staff, departmentId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access department');
        }
        const findDepartment = await this.prisma.department.findFirst({
            where: {
                id: departmentId
            }
        });
        if (!findDepartment) {
            throw new common_1.ForbiddenException('The Department is invalid');
        }
        const deletedDepartment = await this.prisma.department.delete({
            where: {
                id: departmentId
            }
        });
        if (!deletedDepartment) {
            throw new common_1.ForbiddenException('Failed to delete the department');
        }
        return true;
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentService);
//# sourceMappingURL=department.service.js.map