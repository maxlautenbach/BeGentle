const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const userid = parseInt(req.query.userid)
  var data = await prisma.user.findMany({
    where: {
      id: userid,
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
  res.status(200).json(data)
}
