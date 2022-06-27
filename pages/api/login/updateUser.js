const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  var body
  try {
    body = JSON.parse(req.body)
  } catch (error) {
    body = req.body
  }
  const user = await prisma.user.update({
    where: {
      id: parseInt(body.userid),
    },
    data: {
      lastActivity: new Date(),
      lastname: body.lastname,
      firstname: body.firstname,
      email: body.email,
      phone: body.phone,
    },
  })
  try {
    await prisma.address.update({
      where: {
        userId: parseInt(body.userid),
      },
      data: {
        street: body.street,
        city: body.city,
        country: body.country,
      },
    })
  } catch (error) {
    await prisma.address.create({
      data: {
        userId: parseInt(body.userid),
        street: body.street,
        city: body.city,
        country: body.country,
      },
    })
  }
  if (user !== null) {
    res.status(200).json({ message: 'Successful' })
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}
