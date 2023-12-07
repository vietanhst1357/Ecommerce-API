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
import { RoleService } from './role.service';
import { GetStaff } from '../auth/decorator';
import { Staff } from '@prisma/client';
import { CreateRoleDto, EditRoleDto } from './dto';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Get()
    getAllRoles(@GetStaff() staff: Staff) {
        return this.roleService.getAllRoles(staff);
    }

    @Get(':id')
    getRoleById(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) roleId: number,
    ) {
        return this.roleService.getRoleById(staff, roleId);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createRole(@GetStaff() staff: Staff, @Body() dto: CreateRoleDto) {
        return this.roleService.createRole(staff, dto);
    }

    @Patch(':id')
    editRole(
        @GetStaff() staff: Staff,
        @Param('id', ParseIntPipe) roleId: number,
        @Body() dto: EditRoleDto,
    ) {
        return this.roleService.editRole(staff, roleId, dto);
    }

    @Delete(':id')
    deleteRole(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) roleId: number) {
        return this.roleService.deleteRole(staff, roleId);
    }
}
