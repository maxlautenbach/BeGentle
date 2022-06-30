const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function round(x, digit) {
  const multiplier = Math.pow(10, digit)
  return Math.round(x * multiplier) / multiplier
}

export default async function handler(req, res) {
  const cartid = parseInt(req.query.cartid)
  const rentals = await prisma.rental.findMany({
    where: {
      shoppingCartId: cartid,
    },
  })
  var price = 0
  for (const rentalObject of rentals) {
    price += round(rentalObject.price, 2)
  }
  const cart = await prisma.shoppingCart.findFirst({
    where: {
      id: cartid,
    },
  })
  var data = await prisma.shoppingCart.update({
    where: {
      id: cartid,
    },
    data: {
      rentalPrice: round(price, 2),
      totalPrice: round(price + cart.extraFee + cart.shippingFee, 2),
      monthlyPrice: round(price + cart.extraFee, 2),
    },
    include: {
      rentals: {
        include: {
          instrumentObject: {
            include: {
              model: true,
            },
          },
        },
      },
    },
  })
  data['rentalCount'] = data.rentals.length
  res.status(200).json(data)
}
