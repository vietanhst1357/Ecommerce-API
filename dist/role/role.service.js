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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllRoles(staff) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access role');
        }
        const roles = await this.prisma.role.findMany();
        if (!roles) {
            throw new common_1.ForbiddenException('Failed to get all roles');
        }
        return roles;
    }
    async getRoleById(staff, roleId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access role');
        }
        const role = await this.prisma.role.findFirst({
            where: {
                id: roleId
            }
        });
        if (!role) {
            throw new common_1.ForbiddenException('Failed to get role by id');
        }
        return role;
    }
    async createRole(staff, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access role');
        }
        const createdRole = await this.prisma.role.create({
            data: dto
        });
        if (!createdRole) {
            throw new common_1.ForbiddenException('Failed to create a role');
        }
        return createdRole;
    }
    async editRole(staff, roleId, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access role');
        }
        const findRole = await this.prisma.role.findFirst({
            where: {
                id: roleId
            }
        });
        if (!findRole) {
            throw new common_1.ForbiddenException('The role id invalid');
        }
        const editedRole = await this.prisma.role.update({
            where: {
                id: roleId
            },
            data: {
                ...dto
            }
        });
        if (!editedRole) {
            throw new common_1.ForbiddenException('Failed to update the role');
        }
        return editedRole;
    }
    async deleteRole(staff, roleId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The staff cannot access role');
        }
        const findRole = await this.prisma.role.findFirst({
            where: {
                id: roleId
            }
        });
        if (!findRole) {
            throw new common_1.ForbiddenException('The role id invalid');
        }
        const deletedRole = await this.prisma.role.delete({
            where: {
                id: roleId
            }
        });
        if (!deletedRole) {
            throw new common_1.ForbiddenException('Failed to delete the role');
        }
        return deletedRole;
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
//# sourceMappingURL=role.service.js.map