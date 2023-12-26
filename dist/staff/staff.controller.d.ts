import { StaffService } from './staff.service';
import { Staff } from '@prisma/client';
import { EditStaffDto } from './dto';
export declare class StaffController {
    private staffService;
    constructor(staffService: StaffService);
    getCurrentStaff(staff: Staff): {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
        deptId: number;
        dateOfBirth: Date;
        address: string;
        phone: string;
        dateOfHire: Date;
        salary: number;
        roleId: number;
        createdAt: Date;
        updatedAt: Date;
        statusId: number;
    };
    editStaff(id: number, dto: EditStaffDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
        deptId: number;
        dateOfBirth: Date;
        address: string;
        phone: string;
        dateOfHire: Date;
        salary: number;
        roleId: number;
        createdAt: Date;
        updatedAt: Date;
        statusId: number;
    }>;
}
