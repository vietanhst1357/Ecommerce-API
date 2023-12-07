/*
  Warnings:

  - You are about to drop the column `stressAddress` on the `shippingAddresses` table. All the data in the column will be lost.
  - Added the required column `street` to the `shippingAddresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shippingAddresses" DROP COLUMN "stressAddress",
ADD COLUMN     "street" TEXT NOT NULL;
