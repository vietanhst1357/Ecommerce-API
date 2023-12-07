/*
  Warnings:

  - Added the required column `name` to the `shippingAddresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shippingAddresses" ADD COLUMN     "name" TEXT NOT NULL;
