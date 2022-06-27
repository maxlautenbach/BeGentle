/*
  Warnings:

  - You are about to drop the column `zahlungsinformationen` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "zahlungsinformationen",
ADD COLUMN     "country" TEXT;
