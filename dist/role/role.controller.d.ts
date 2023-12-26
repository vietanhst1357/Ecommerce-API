import { RoleService } from './role.service';
import { Staff } from '@prisma/client';
import { CreateRoleDto, EditRoleDto } from './dto';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
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
