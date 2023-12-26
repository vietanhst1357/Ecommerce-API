import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateStatusDto, EditStatusDto } from './dto';
export declare class StatusService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllStatus(staff: Staff): Promise<{
        id: number;
        statusName: string;
    }[]>;
    getStatusById(sstaff: Staff, statusId: number): Promise<{
        id: number;
        statusName: string;
    }>;
    createStatus(staff: Staff, dto: CreateStatusDto): Promise<{
        id: number;
        statusName: string;
    }>;
    editStatus(staff: Staff, statusId: number, dto: EditStatusDto): Promise<{
        id: number;
        statusName: string;
    }>;
    deleteStatus(staff: Staff, statusId: number): Promise<{
        id: number;
        statusName: string;
    }>;
}
