import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('POSTGRES_URL'),
                },
            },
        });
    }
    cleanDb() {
        return this.$transaction([
            // this.bookmark.deleteMany(),
            this.user.deleteMany(),
            this.staff.deleteMany(),
        ]);
    }
}
