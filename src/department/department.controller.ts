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
import { DepartmentService } from './department.service';
import { Staff } from '@prisma/client';
import { CreateDepartmentDto, EditDepartmentDto } from './dto';
import { GetStaff } from '../auth/decorator';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {}

    @Get()
    getAllDepartments(@GetStaff() staff: Staff) {
        return this.departmentService.getAllDepartments(staff);
    }

    @Get(':id')
    getDepartmentById(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) departmentId: number,
    ) {
        return this.departmentService.getDepartmentById(staff, departmentId);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createDepartment(
        @GetStaff() staff: Staff,
        @Body() dto: CreateDepartmentDto,
    ) {
        return this.departmentService.createDepartment(staff, dto);
    }

    @Patch(':id')
    editDepartment(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) departmentId: number,
        @Body() dto: EditDepartmentDto,
    ) {
        return this.departmentService.editDepartment(staff, departmentId, dto);
    }

    @Delete(':id')
    deleteDepartment(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) departmentId: number,
    ) {
        return this.departmentService.deleteDepartment(staff, departmentId);
    }
}
