-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_shoppingCartId_fkey";

-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "orderId" INTEGER,
ALTER COLUMN "shoppingCartId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rentalPrice" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "shippingFee" DOUBLE PRECISION NOT NULL DEFAULT 4.99,
    "extraFee" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "totalPrice" DOUBLE PRECISION NOT NULL DEFAULT 4.99,
    "monthlyPrice" DOUBLE PRECISION NOT NULL DEFAULT 0.00,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_shoppingCartId_fkey" FOREIGN KEY ("shoppingCartId") REFERENCES "ShoppingCart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
