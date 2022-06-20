-- CreateTable
CREATE TABLE "PaymentInformation" (
    "id" SERIAL NOT NULL,
    "variant" INTEGER NOT NULL,
    "cardnumber" TEXT,
    "cardowner" TEXT,
    "carddate" TEXT,
    "ccv" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PaymentInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentInformation_userId_key" ON "PaymentInformation"("userId");

-- AddForeignKey
ALTER TABLE "PaymentInformation" ADD CONSTRAINT "PaymentInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
