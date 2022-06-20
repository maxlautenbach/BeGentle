const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  function addMonths(date, months) {
    var d = date.getDate()
    date.setMonth(date.getMonth() + +months)
    if (date.getDate() != d) {
      date.setDate(0)
    }
    return date
  }

  var body
  try {
    body = JSON.parse(req.body)
  } catch (error) {
    body = req.body
  }
  var data = await prisma.shoppingCart.findFirst({
    where: {
      id: body.cartid,
    },
    include: {
      rentals: true,
    },
  })
  var order = await prisma.order.create({
    data: {
      userId: body.userid,
      createdAt: new Date(),
      totalPrice: data.totalPrice,
      extraFee: data.extraFee,
      monthlyPrice: data.monthlyPrice,
      rentalPrice: data.rentalPrice,
      shippingFee: data.shippingFee,
    },
  })
  for (const el of data.rentals) {
    console.log(el)
    const duration = el.duration
    const rentalStart = new Date()
    const rentalEnd = addMonths(rentalStart, parseInt(duration))

    await prisma.rental.update({
      where: {
        id: el.id,
      },
      data: {
        rentalStart: rentalStart,
        rentalEnd: rentalEnd,
        shoppingCartId: null,
        orderId: order.id,
        rentalStatus: 'BOOKED',
      },
    })
  }
  await prisma.shoppingCart.update({
    where: {
      id: body.cartid,
    },
    data: {
      monthlyPrice: 0,
      totalPrice: 4.99,
      shippingFee: 4.99,
      extraFee: 0,
      rentalPrice: 0,
    },
  })
  res.status(200).json({ id: order.id, message: 'Successful' })
}
