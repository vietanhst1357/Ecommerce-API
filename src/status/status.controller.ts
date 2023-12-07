import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { GetStaff } from '../auth/decorator';
import { Staff } from '@prisma/client';
import { CreateStatusDto, EditStatusDto } from './dto';

@Controller('status')
export class StatusController {
    constructor(private statusService: StatusService) {}

    @Get()
    getAllStatus(@GetStaff() staff: Staff) {
        return this.statusService.getAllStatus(staff);
    }

    @Get(':id')
    getStatusById(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) statusId: number,
    ) {
        return this.statusService.getStatusById(staff, statusId);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createStatus(@GetStaff() staff: Staff, @Body() dto: CreateStatusDto) {
        return this.statusService.createStatus(staff, dto);
    }

    @Patch(':id')
    editStatus(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) statusId: number,
        @Body() dto: EditStatusDto,
    ) {
        return this.statusService.editStatus(staff, statusId, dto);
    }

    @Delete(':id')
    deleteStatus(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) statusId: number) {
        return this.statusService.deleteStatus(staff, statusId);
    }
}
