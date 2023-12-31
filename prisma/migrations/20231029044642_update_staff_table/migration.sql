/*
  Warnings:

  - You are about to drop the column `password` on the `staffs` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `staffs` table. All the data in the column will be lost.
  - Added the required column `statusId` to the `staffs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "staffs" DROP COLUMN "password",
DROP COLUMN "status",
ADD COLUMN     "statusId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "statusName" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "staffs" ADD CONSTRAINT "staffs_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
