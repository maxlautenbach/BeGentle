const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function round(x, digit) {
  const multiplier = Math.pow(10, digit)
  return Math.round(x * multiplier) / multiplier
}

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const userid = parseInt(body.userid)
  const cartid = parseInt(body.cartid)
  const instrumentId = parseInt(body.instrumentId)
  const duration = parseInt(body.duration)
  const price = parseInt(body.price)
  const rentalObject = await prisma.instrumentObject.findMany({
    where: {
      AND: [{ modelId: instrumentId }, { currentlyRented: false }],
    },
  })
  const rental = await prisma.rental.create({
    data: {
      userId: userid,
      instrumentObjectId: rentalObject[0].id,
      shoppingCartId: cartid,
      rentalStatus: 'RESERVED',
      price: parseFloat(price),
      duration: duration,
      points: 0,
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
  const newRentalPrice = round(cart.rentalPrice + rental.price, 2)
  const newTotal = round(cart.totalPrice + rental.price, 2)
  await prisma.shoppingCart.update({
    where: {
      id: cartid,
    },
    data: {
      rentalPrice: newRentalPrice,
      totalPrice: newTotal,
    },
  })
  res.status(200).json({ message: 'Successful' })
}
