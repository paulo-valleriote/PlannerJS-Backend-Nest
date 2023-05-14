/*
  Warnings:

  - You are about to drop the column `userId` on the `CustomerDemand` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomerDemand" DROP CONSTRAINT "CustomerDemand_userId_fkey";

-- AlterTable
ALTER TABLE "CustomerDemand" DROP COLUMN "userId";
