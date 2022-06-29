const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id } = req.query
  const instrumentModel = await prisma.instrumentModel.findUnique({
    where: {
      id: Number(id),
    },
  })

  const reviews = await prisma.review.findMany({
    where: {
      instrumentModelId: Number(id),
    },
  })
  let avgReview = 0
  let sumStars = 0
  let countReviews = 0
  for (let review of reviews) {
    if (review != undefined) {
      sumStars = sumStars + review.stars
      countReviews = countReviews + 1
    }
  }
  if (countReviews !== 0) {
    avgReview = parseInt(sumStars / countReviews)
  }

  instrumentModel['stars'] = avgReview

  res.status(200).json(instrumentModel)
}
