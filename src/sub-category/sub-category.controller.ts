import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { GetStaff } from '../auth/decorator';
import { Staff } from '@prisma/client';
import { CreateSubCategoryDto, EditSubCategoryDto } from './dto';

@Controller('sub-category')
export class SubCategoryController {
    constructor(private subCategoryService: SubCategoryService) {

    }

    @Get()
    getAllSubCategories() {
        return this.subCategoryService.getAllSubCategory();
    }

    @Get(':id')
    getSubCategoryById(@Param('id', ParseIntPipe) subCategoryId: number) {
        return this.subCategoryService.getSubCategoryById(subCategoryId);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createSubCategory(@GetStaff() staff: Staff, dto: CreateSubCategoryDto) {
        return this.subCategoryService.createSubCategory(staff, dto);
    }

    @Patch(':id')
    updateSubCategory(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) subCategoryId: number, dto: EditSubCategoryDto) {
        return this.subCategoryService.editSubCategory(staff, subCategoryId, dto);
    }

    @Delete(':id')
    daleteSubCategory(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) subCategoryId: number) {
        return this.subCategoryService.deleteSubCategory(staff, subCategoryId);
    }
}
