/*
  Warnings:

  - You are about to drop the `Entry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentInformation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PaymentInformation" DROP CONSTRAINT "PaymentInformation_userId_fkey";

-- DropTable
DROP TABLE "Entry";

-- DropTable
DROP TABLE "PaymentInformation";
