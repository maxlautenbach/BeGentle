/*
  Warnings:

  - You are about to drop the column `number` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `postCode` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "number",
DROP COLUMN "postCode";
