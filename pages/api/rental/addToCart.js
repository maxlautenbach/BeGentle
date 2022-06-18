const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  console.log(body)
  const userid = parseInt(body.userid)
  const cartid = parseInt(body.cartid)
  const instrumentId = parseInt(body.instrumentId)
  const duration = parseInt(body.duration)
  const rentalObject = await prisma.instrumentObject.findMany({
    where: {
      AND: [{ modelId: instrumentId }, { currentlyRented: false }],
    },
  })
  const instrumentModel = await prisma.instrumentModel.findFirst({
    where: {
      id: instrumentId,
    },
  })
  console.log(rentalObject)
  const rental = await prisma.rental.create({
    data: {
      userId: userid,
      instrumentObjectId: rentalObject[0].id,
      shoppingCartId: cartid,
      rentalStatus: 'RESERVED',
      price: instrumentModel.priceInMonth,
      duration: duration,
    },
  })
  await prisma.instrumentObject.update({
    where: {
      id: rentalObject[0].id,
    },
    data: {
      currentlyRented: true,
    },
  })
  if (rentalObject.length == 1) {
    await prisma.instrumentModel.update({
      where: {
        id: instrumentId,
      },
      data: {
        isAvailable: false,
      },
    })
  }

  const cart = await prisma.shoppingCart.findFirst({
    where: {
      id: cartid,
    },
  })
  const newTotal = cart.totalPrice + rental.price
  await prisma.shoppingCart.update({
    where: {
      id: cartid,
    },
    data: {
      totalPrice: newTotal,
    },
  })
  res.status(200).json({ message: 'Successful' })
}
