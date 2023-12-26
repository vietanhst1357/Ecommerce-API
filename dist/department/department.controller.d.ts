import { DepartmentService } from './department.service';
import { Staff } from '@prisma/client';
import { CreateDepartmentDto, EditDepartmentDto } from './dto';
export declare class DepartmentController {
    private departmentService;
    constructor(departmentService: DepartmentService);
    getAllDepartments(staff: Staff): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDepartmentById(staff: Staff, departmentId: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createDepartment(staff: Staff, dto: CreateDepartmentDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editDepartment(staff: Staff, departmentId: number, dto: EditDepartmentDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteDepartment(staff: Staff, departmentId: number): Promise<boolean>;
}
