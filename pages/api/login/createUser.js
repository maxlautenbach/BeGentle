const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  var user
  if (body.status == 'TEMP') {
    user = await prisma.user.create({
      data: {
        status: 'TEMP',
      },
    })
  }
  const response = {
    userid: user.id,
  }
  res.status(201).json(response)
}
