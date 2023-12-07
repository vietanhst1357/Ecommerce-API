import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateDepartmentDto, EditDepartmentDto } from './dto';

@Injectable()
export class DepartmentService {
    constructor(private prisma: PrismaService) {}

    async getAllDepartments(staff: Staff) {
        if (!staff.roleId) {
            throw new ForbiddenException('The staff cannot access department');
        }

        const departments = await this.prisma.department.findMany();
        if (!departments) {
            throw new ForbiddenException('Failed to get all departments');
        }

        return departments;
    }

    async getDepartmentById(staff: Staff, departmentId: number) {
        if (!staff.roleId) {
            throw new ForbiddenException('The staff cannot access department');
        }

        const department = await this.prisma.department.findFirst({
            where: {
                id: departmentId,
            },
        });
        if (!department) {
            throw new ForbiddenException('Failed to get department by id');
        }

        return department;
    }

    async createDepartment(staff: Staff, dto: CreateDepartmentDto) {
        if (!staff.roleId) {
            throw new ForbiddenException('The staff cannot access department');
        }

        const createdDepartment = await this.prisma.department.create({
            data: dto,
        });
        if(!createdDepartment) {
            throw new ForbiddenException('Failed to create a department');
        }

        return createdDepartment;
    }

    async editDepartment(staff: Staff, departmentId: number, dto: EditDepartmentDto) {
        if (!staff.roleId) {
            throw new ForbiddenException('The staff cannot access department');
        }

        const findDepartment = await this.prisma.department.findFirst({
            where: {
                id: departmentId
            }
        });
        if(!findDepartment) {
            throw new ForbiddenException('The Department is invalid');
        }

        const editedDepartment = await this.prisma.department.update({
            where: {
                id: departmentId
            },
            data: {
                ...dto
            }
        });
        if(!editedDepartment){
            throw new ForbiddenException('Failed to update the department')
        }

        return editedDepartment;
    }

    async deleteDepartment(staff: Staff, departmentId: number) {
        if (!staff.roleId) {
            throw new ForbiddenException('The staff cannot access department');
        }

        const findDepartment = await this.prisma.department.findFirst({
            where: {
                id: departmentId
            }
        });
        if(!findDepartment) {
            throw new ForbiddenException('The Department is invalid');
        }
        
        const deletedDepartment = await this.prisma.department.delete({
            where: {
                id: departmentId
            }
        });
        if(!deletedDepartment){
            throw new ForbiddenException('Failed to delete the department')
        }

        return true;
    }
}
