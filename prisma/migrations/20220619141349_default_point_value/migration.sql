/*
  Warnings:

  - Made the column `punkte` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "punkte" SET NOT NULL,
ALTER COLUMN "punkte" SET DEFAULT 0;
