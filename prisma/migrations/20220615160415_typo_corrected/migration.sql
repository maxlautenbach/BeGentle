/*
  Warnings:

  - You are about to drop the column `currentylRented` on the `InstrumentObject` table. All the data in the column will be lost.
  - Added the required column `currentlyRented` to the `InstrumentObject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InstrumentObject" DROP COLUMN "currentylRented",
ADD COLUMN     "currentlyRented" BOOLEAN NOT NULL;
