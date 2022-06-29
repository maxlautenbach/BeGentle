const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const rentalid = parseInt(req.query.rentalid)
  var data = await prisma.rental.findFirst({
    where: {
      id: parseInt(rentalid)
    },
    include: {
      instrumentObject: {
        include: {
          model: {
            select: {
              name: true,
            }
          }
        },
      }
    },
  })
  console.log(data)
  res.status(200).json(data)
}
