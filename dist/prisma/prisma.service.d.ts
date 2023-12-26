import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config/dist';
export declare class PrismaService extends PrismaClient {
    constructor(config: ConfigService);
    cleanDb(): Promise<[import(".prisma/client").Prisma.BatchPayload, import(".prisma/client").Prisma.BatchPayload]>;
}
