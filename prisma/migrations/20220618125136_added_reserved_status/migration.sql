-- AlterEnum
ALTER TYPE "RentalStatus" ADD VALUE 'RESERVED';

-- AlterTable
ALTER TABLE "Rental" ALTER COLUMN "bookedAt" DROP NOT NULL,
ALTER COLUMN "rentalStart" DROP NOT NULL,
ALTER COLUMN "rentalEnd" DROP NOT NULL,
ALTER COLUMN "points" DROP NOT NULL;
