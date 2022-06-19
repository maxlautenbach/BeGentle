/*
  Warnings:

  - Made the column `bookedAt` on table `Rental` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rentalStart` on table `Rental` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rentalEnd` on table `Rental` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Rental" ALTER COLUMN "bookedAt" SET NOT NULL,
ALTER COLUMN "bookedAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "rentalStart" SET NOT NULL,
ALTER COLUMN "rentalStart" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "rentalEnd" SET NOT NULL,
ALTER COLUMN "rentalEnd" SET DEFAULT CURRENT_TIMESTAMP;
