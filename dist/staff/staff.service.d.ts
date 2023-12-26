import { PrismaService } from '../prisma/prisma.service';
import { EditStaffDto } from './dto';
export declare class StaffService {
    private prisma;
    constructor(prisma: PrismaService);
    editStaff(staffId: number, dto: EditStaffDto, staffChangedId?: number): Promise<{
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
