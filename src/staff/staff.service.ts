import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditStaffDto } from './dto';

@Injectable()
export class StaffService {
    constructor(private prisma: PrismaService) {}

    async editStaff(
        staffId: number,
        dto: EditStaffDto,
        staffChangedId?: number,
    ) {
        if (staffChangedId) {
            const findStaff = await this.prisma.staff.findFirst({
                where: {
                    id: staffChangedId,
                },
            });
            if (!findStaff) {
                throw new NotFoundException('The staff is invalid');
            }

            const staffChanged = await this.prisma.staff.update({
                where: {
                    id: staffChangedId,
                },
                data: {
                    ...dto,
                },
            });
            if (!staffChanged) {
                throw new ForbiddenException('Failed to update the staff');
            }

            delete staffChanged.hash;
            return staffChanged;
        }
        const staff = await this.prisma.staff.update({
            where: {
                id: staffId,
            },
            data: {
                ...dto,
            },
        });
        if (!staff) {
            throw new ForbiddenException('Failed to update the staff');
        }

        delete staff.hash;
        return staff;
    }
}
