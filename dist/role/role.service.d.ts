import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateRoleDto, EditRoleDto } from './dto';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllRoles(staff: Staff): Promise<{
        id: number;
        role: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getRoleById(staff: Staff, roleId: number): Promise<{
        id: number;
        role: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createRole(staff: Staff, dto: CreateRoleDto): Promise<{
        id: number;
        role: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editRole(staff: Staff, roleId: number, dto: EditRoleDto): Promise<{
        id: number;
        role: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteRole(staff: Staff, roleId: number): Promise<{
        id: number;
        role: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
