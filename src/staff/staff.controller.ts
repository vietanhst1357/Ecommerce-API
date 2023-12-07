import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { StaffService } from './staff.service';
import { GetStaff } from '../auth/decorator';
import { Staff } from '@prisma/client';
import { EditStaffDto } from './dto';

@UseGuards(JwtGuard)
@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService) {}

    @Get('me')
    getCurrentStaff(@GetStaff() staff: Staff) {
        return staff;
    }

    @Patch()
    editStaff(@GetStaff('id') id: number, dto: EditStaffDto) {
        return this.staffService.editStaff(id, dto);
    }
}
