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
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StatusService = class StatusService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllStatus(staff) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The Staff cannot access status');
        }
        const status = await this.prisma.status.findMany();
        if (!status) {
            throw new common_1.ForbiddenException('Failed to get all status');
        }
        return status;
    }
    async getStatusById(sstaff, statusId) {
        if (!sstaff.roleId) {
            throw new common_1.ForbiddenException('The Staff cannot access status');
        }
        const status = await this.prisma.status.findFirst({
            where: { id: statusId }
        });
        if (!status) {
            throw new common_1.ForbiddenException('Failed to get status');
        }
        return status;
    }
    async createStatus(staff, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The Staff cannot access status');
        }
        const createdStatus = await this.prisma.status.create({
            data: dto
        });
        if (!createdStatus) {
            throw new common_1.ForbiddenException('Failed to create a new status');
        }
        return createdStatus;
    }
    async editStatus(staff, statusId, dto) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The Staff cannot access status');
        }
        const findStatus = await this.prisma.status.findFirst({
            where: {
                id: statusId
            }
        });
        if (!findStatus) {
            throw new common_1.ForbiddenException('The status is invalid');
        }
        const editedStatus = await this.prisma.status.update({
            where: {
                id: statusId
            },
            data: {
                ...dto
            }
        });
        if (!editedStatus) {
            throw new common_1.ForbiddenException('Failed to update the status');
        }
        return editedStatus;
    }
    async deleteStatus(staff, statusId) {
        if (!staff.roleId) {
            throw new common_1.ForbiddenException('The Staff cannot access status');
        }
        const findStatus = await this.prisma.status.findFirst({
            where: {
                id: statusId
            }
        });
        if (!findStatus) {
            throw new common_1.ForbiddenException('The status is invalid');
        }
        const deletedStatus = await this.prisma.status.delete({
            where: {
                id: statusId
            }
        });
        if (!deletedStatus) {
            throw new common_1.ForbiddenException('Failed to delete the status');
        }
        return deletedStatus;
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatusService);
//# sourceMappingURL=status.service.js.map