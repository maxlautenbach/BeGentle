const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const userid = parseInt(req.query.userid)
  const data = await prisma.shoppingCart.create({
    data: {
      userId: userid,
    },
  })
  console.log(data)
  res.status(201).json({ cartid: data.id })
}
