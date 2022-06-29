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
        id: parseInt(body.rentalid),
      },
      include: {
        instrumentObject: true,
      },
    })

    const model = await prisma.rental.findFirst({
      where: {
        id: parseInt(rental.instrumentObject.modelId),
      },
    })

    await prisma.rental.update({
      where: {
        id: parseInt(body.rentalid),
      },
      data: {
        rentalStatus: 'BACK',
      },
    })
    const rentalObject = await prisma.instrumentObject.findMany({
      where: {
        AND: [
          { modelId: rental.instrumentObject.modelId },
          { currentlyRented: false },
        ],
      },
    })
    if (rentalObject.length == 0) {
      await prisma.instrumentModel.update({
        where: {
          id: rental.instrumentObject.modelId,
        },
        data: {
          isAvailable: true,
        },
      })
    }
    await prisma.instrumentObject.update({
      where: {
        id: parseInt(rental.instrumentObject.id),
      },
      data: {
        currentlyRented: false,
      },
    })
    await prisma.review.create({
      data: {
        stars: parseInt(body.rating),
        instrumentModelId: model.id,
      },
    })
  } catch (error) {
    console.log(error.message)
  }
  res.status(200).json({ message: 'Successful' })
}
