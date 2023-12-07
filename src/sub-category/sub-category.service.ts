import { ForbiddenException, Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';
import { CreateSubCategoryDto, EditSubCategoryDto } from './dto';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Injectable()
export class SubCategoryService {
    constructor(private prisma: PrismaService) {

    }

    async getAllSubCategory() {
        const subCategories = await this.prisma.subCategory.findMany();
        if(!subCategories) {
            throw new ForbiddenException('Failed to get all subcategories');
        }

        return subCategories;
    }

    async getSubCategoryById(subCategoryId: number) {
        const subCategory = await this.prisma.subCategory.findFirst({
            where: {
                id: subCategoryId
            }
        });
        if(!subCategory) {
            throw new ForbiddenException('Failed to get subcategory');
        }

        return subCategory;
    }

    async createSubCategory(staff: Staff, dto: CreateSubCategoryDto) {
        if (!staff.roleId) {
            throw new ForbiddenException("The staff cannot access subcategory");
        }
        
        const createdSubcategory = await this.prisma.subCategory.create({
            data: dto
        });
        if(!createdSubcategory) {
            throw new ForbiddenException('Faileded to create a subcategory');
        }

        return createdSubcategory;
    }

    async editSubCategory(staff: Staff, subCategoryId: number, dto: EditSubCategoryDto) {
        if (!staff.roleId) {
            throw new ForbiddenException("The staff cannot access subcategory");
        }

        const findSubCategory = await this.prisma.subCategory.findFirst({
            where: {
                id: subCategoryId
            }
        });
        if(!findSubCategory){
            throw new ForbiddenException('The Subcategory is invalid');
        }

        const editedSubCategory = await this.prisma.subCategory.update({
            where: {
                id: subCategoryId
            },
            data: {
                ...dto
            }
        });
        if(!editedSubCategory) {
            throw new ForbiddenException('Failed to update subcategory');
        }

        return editedSubCategory;
    }

    async deleteSubCategory(staff: Staff, subCategoryId: number) {
        if (!staff.roleId) {
            throw new ForbiddenException("The staff cannot access subcategory");
        }

        const findSubCategory = await this.prisma.subCategory.findFirst({
            where: {
                id: subCategoryId
            }
        });
        if(!findSubCategory){
            throw new ForbiddenException('The Subcategory is invalid');
        }
        
        const deletedSubCategory = await this.prisma.subCategory.delete({
            where: {
                id: subCategoryId
            }
        });
        if (!deletedSubCategory) {
            throw new ForbiddenException('Failed to delete subcategory');
        }

        return true;
    }
}
