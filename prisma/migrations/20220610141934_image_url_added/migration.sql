/*
  Warnings:

  - Added the required column `imageURL` to the `InstrumentModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InstrumentModel" ADD COLUMN     "imageURL" TEXT NOT NULL;
