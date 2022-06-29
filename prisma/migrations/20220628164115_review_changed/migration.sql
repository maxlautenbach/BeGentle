/*
  Warnings:

  - You are about to drop the column `rentalId` on the `Review` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[instrumentModelId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_rentalId_fkey";

-- DropIndex
DROP INDEX "Review_rentalId_key";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rentalId",
ADD COLUMN     "instrumentModelId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Review_instrumentModelId_key" ON "Review"("instrumentModelId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_instrumentModelId_fkey" FOREIGN KEY ("instrumentModelId") REFERENCES "InstrumentModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
