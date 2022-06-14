-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'WORKER');

-- CreateEnum
CREATE TYPE "RentalStatus" AS ENUM ('BOOKED', 'SHIPPED', 'DELIVERED', 'BACK', 'DELAYED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "punkte" INTEGER NOT NULL,
    "zahlungsinformationen" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'CUSTOMER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "postCode" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "overCategoryId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstrumentModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "priceInMonth" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "instrumentTypId" INTEGER NOT NULL,

    CONSTRAINT "InstrumentModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstrumentObject" (
    "id" SERIAL NOT NULL,
    "currentylRented" BOOLEAN NOT NULL,
    "modelId" INTEGER NOT NULL,

    CONSTRAINT "InstrumentObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingCart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ShoppingCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "stars" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "rentalId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" SERIAL NOT NULL,
    "instrumentObjectId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookedAt" TIMESTAMP(3) NOT NULL,
    "rentalStart" TIMESTAMP(3) NOT NULL,
    "rentalEnd" TIMESTAMP(3) NOT NULL,
    "rentalStatus" "RentalStatus" NOT NULL,
    "points" INTEGER NOT NULL,
    "shoppingCartId" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Damage" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "costs" DOUBLE PRECISION NOT NULL,
    "rentalId" INTEGER NOT NULL,

    CONSTRAINT "Damage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_rentalId_key" ON "Review"("rentalId");

-- CreateIndex
CREATE UNIQUE INDEX "Damage_rentalId_key" ON "Damage"("rentalId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_overCategoryId_fkey" FOREIGN KEY ("overCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstrumentModel" ADD CONSTRAINT "InstrumentModel_instrumentTypId_fkey" FOREIGN KEY ("instrumentTypId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstrumentObject" ADD CONSTRAINT "InstrumentObject_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "InstrumentModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCart" ADD CONSTRAINT "ShoppingCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_instrumentObjectId_fkey" FOREIGN KEY ("instrumentObjectId") REFERENCES "InstrumentObject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_shoppingCartId_fkey" FOREIGN KEY ("shoppingCartId") REFERENCES "ShoppingCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Damage" ADD CONSTRAINT "Damage_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
