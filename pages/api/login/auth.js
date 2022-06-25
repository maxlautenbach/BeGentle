const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  var body
  try {
    body = JSON.parse(req.body)
  } catch (error) {
    body = req.body
  }
  var id = parseInt(body.id)
  var email = ''
  if (isNaN(id)) {
    id = 0
    email = body.id
  }
  const user = await prisma.user.findFirst({
    where: {
      AND: [
        {
          OR: [
            {
              id: id,
            },
            { email: email },
          ],
        },
        { password: body.password },
      ],
    },
  })
  if (user !== null) {
    var tempcart
    if (body.tempcartid !== undefined) {
      tempcart = await prisma.shoppingCart.findFirst({
        where: {
          id: parseInt(body.tempcartid),
        },
        include: {
          user: true,
        },
      })
    }

    const usercart = await prisma.shoppingCart.findFirst({
      where: {
        userId: user.id,
      },
    })

    if (tempcart != undefined && tempcart.id != usercart.id) {
      await prisma.rental.updateMany({
        where: {
          shoppingCartId: tempcart.id,
        },
        data: {
          userId: user.id,
          shoppingCartId: usercart.id,
        },
      })
      await prisma.shoppingCart.update({
        where: {
          id: usercart.id,
        },
        data: {
          createdAt: tempcart.createdAt,
          rentalPrice: tempcart.rentalPrice,
          shippingFee: tempcart.shippingFee,
          extraFee: tempcart.extraFee,
          totalPrice: tempcart.totalPrice,
        },
      })
      const tempuserid = tempcart.user.id
      await prisma.shoppingCart.delete({
        where: {
          id: tempcart.id,
        },
      })
      await prisma.user.delete({
        where: {
          id: tempuserid,
        },
      })
    }
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastActivity: new Date(),
      },
    })
    if (usercart !== null) {
      res.status(200).json({
        message: 'Authenticated',
        userid: user.id,
        cartid: usercart.id,
      })
    } else {
      res.status(200).json({ message: 'Authenticated', userid: user.id })
    }
  } else {
    res.status(404).json({ message: 'User/Password wrong' })
  }
}
