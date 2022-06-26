const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id } = req.query
  const instrumentModel = await prisma.instrumentModel.findUnique({
    where: {
      id: Number(id),
    },
  })
  const objects = await prisma.instrumentObject.findMany({
    where: {
      modelId: Number(id),
    }
  })
  let rentals = []
  for(let object of objects){
    let rental = await prisma.rental.findMany({
      where: {
        instrumentObjectId: object.id,
      },
      include: {
        review: true
      },
    })
    rentals.push(rental)
  }
  console.log(rentals)

  let avgReview = 0
  if(rentals !== []){
    
    let sumStars = 0
    let countReviews = 0
    for(let rental of rentals){
      console.log(rental.review)
      if(rental.review !== undefined && rental.review !== []){
        sumStars = sumStars + rental.review.stars
        countReviews = countReviews + 1
      }
    }
    if(countReviews !== 0){
      avgReview = parseInt(sumStars/countReviews) 
    }
  }
  instrumentModel['review'] = avgReview

  res.status(200).json(instrumentModel)
}
