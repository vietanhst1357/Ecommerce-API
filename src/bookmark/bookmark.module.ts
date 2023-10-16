import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BookmarkController],
  providers: [BookmarkService]
})
export class BookmarkModule {}
