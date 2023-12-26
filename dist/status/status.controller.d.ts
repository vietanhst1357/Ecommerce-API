import { StatusService } from './status.service';
import { Staff } from '@prisma/client';
import { CreateStatusDto, EditStatusDto } from './dto';
export declare class StatusController {
    private statusService;
    constructor(statusService: StatusService);
    getAllStatus(staff: Staff): Promise<{
        id: number;
        statusName: string;
    }[]>;
    getStatusById(staff: Staff, statusId: number): Promise<{
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
