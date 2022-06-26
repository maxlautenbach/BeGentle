const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {

    
  var body
  try {
    body = JSON.parse(req.body)
  } catch (error) {
    body = req.body
  }
  try {
    const rental = await prisma.rental.findFirst({
        where: {
            id: parseInt(body.rentalid)
          },
          include: {
            instrumentObject: true
          },
    })

    await prisma.rental.update({
      where: {
        id: parseInt(body.rentalid),
      },
      data: {
        rentalStatus: 'BACK'
      },
    }),
    await prisma.instrumentObject.update({
        where: {
          id: parseInt(rental.instrumentObject.id),
        },
        data: {
          currentlyRented: false
        },
      }),
    await prisma.review.create({
        data: {
          stars: parseInt(body.rating),
          rentalId: rental.id,
        },
      })
  } catch (error) {
    console.log(error.message)
  }
  res.status(200).json({ message: 'Successful' })
}
