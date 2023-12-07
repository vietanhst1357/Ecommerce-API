import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateStatusDto, EditStatusDto } from './dto';

@Injectable()
export class StatusService {
    constructor(private prisma: PrismaService) {

    }
    
    async getAllStatus(staff: Staff) {
        if(!staff.roleId) {
            throw new ForbiddenException('The Staff cannot access status');
        }

        const status = await this.prisma.status.findMany();
        if(!status) {
            throw new ForbiddenException('Failed to get all status');
        }

        return status;
    }

    async getStatusById(sstaff: Staff, statusId: number) {
        if(!sstaff.roleId) {
            throw new ForbiddenException('The Staff cannot access status');
        }

        const status = await this.prisma.status.findFirst({
            where: { id: statusId }
        });
        if (!status) {
            throw new ForbiddenException('Failed to get status');
        }

        return status;
    }

    async createStatus(staff: Staff, dto: CreateStatusDto) {
        if(!staff.roleId) {
            throw new ForbiddenException('The Staff cannot access status');
        }

        const createdStatus = await this.prisma.status.create({
            data: dto
        });
        if(!createdStatus) {
            throw new ForbiddenException('Failed to create a new status');
        }

        return createdStatus;
    }

    async editStatus(staff: Staff, statusId: number, dto: EditStatusDto) {
        if(!staff.roleId) {
            throw new ForbiddenException('The Staff cannot access status');
        }

        const findStatus = await this.prisma.status.findFirst({
            where: {
                id: statusId
            }
        });
        if(!findStatus) {
            throw new ForbiddenException('The status is invalid');
        }

        const editedStatus = await this.prisma.status.update({
            where: {
                id: statusId
            },
            data: {
                ...dto
            }
        });
        if(!editedStatus) {
            throw new ForbiddenException('Failed to update the status');
        }

        return editedStatus;
    }

    async deleteStatus(staff: Staff, statusId: number) {
        if(!staff.roleId) {
            throw new ForbiddenException('The Staff cannot access status');
        }

        const findStatus = await this.prisma.status.findFirst({
            where: {
                id: statusId
            }
        });
        if(!findStatus) {
            throw new ForbiddenException('The status is invalid');
        }

        const deletedStatus = await this.prisma.status.delete({
            where: {
                id: statusId
            }
        });
        if(!deletedStatus) {
            throw new ForbiddenException('Failed to delete the status');
        }

        return deletedStatus;
    }
}
