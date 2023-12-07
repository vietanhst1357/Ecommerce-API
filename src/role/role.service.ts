import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateRoleDto, EditRoleDto } from './dto';

@Injectable()
export class RoleService {
    constructor(private prisma: PrismaService){

    }

    async getAllRoles(staff: Staff){
        if(!staff.roleId) {
            throw new ForbiddenException('The staff cannot access role');
        }

        const roles = await this.prisma.role.findMany();
        if (!roles) {
            throw new ForbiddenException('Failed to get all roles');
        }

        return roles;
    }

    async getRoleById(staff: Staff, roleId: number) {
        if(!staff.roleId) {
            throw new ForbiddenException('The staff cannot access role');
        }

        const role = await this.prisma.role.findFirst({
            where: {
                id: roleId
            }
        });
        if(!role) {
            throw new ForbiddenException('Failed to get role by id');
        }

        return role;
    }

    async createRole(staff: Staff, dto: CreateRoleDto) {
        if(!staff.roleId) {
            throw new ForbiddenException('The staff cannot access role');
        }

        const createdRole = await this.prisma.role.create({
            data: dto
        });
        if(!createdRole) {
            throw new ForbiddenException('Failed to create a role');
        }

        return createdRole;
    }

    async editRole(staff: Staff, roleId: number, dto: EditRoleDto) {
        if(!staff.roleId) {
            throw new ForbiddenException('The staff cannot access role');
        }

        const findRole = await this.prisma.role.findFirst({
            where: {
                id: roleId
            }
        });
        if(!findRole) {
            throw new ForbiddenException('The role id invalid');
        }

        const editedRole = await this.prisma.role.update({
            where: {
                id: roleId
            },
            data: {
                ...dto
            }
        });
        if(!editedRole) {
            throw new ForbiddenException('Failed to update the role');
        }

        return editedRole;
    }

    async deleteRole(staff: Staff, roleId: number) {
        if(!staff.roleId) {
            throw new ForbiddenException('The staff cannot access role');
        }

        const findRole = await this.prisma.role.findFirst({
            where: {
                id: roleId
            }
        });
        if(!findRole) {
            throw new ForbiddenException('The role id invalid');
        }

        const deletedRole = await this.prisma.role.delete({
            where: {
                id: roleId
            }
        });
        if(!deletedRole) {
            throw new ForbiddenException('Failed to delete the role');
        }

        return deletedRole;
    }

}
