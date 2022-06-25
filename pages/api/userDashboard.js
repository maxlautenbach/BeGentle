const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const userid = parseInt(req.query.userid)
  var data = await prisma.rental.findMany({
    where: {
      userId: userid,
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
  var user = await prisma.user.findFirst({
    where: {
      id: userid,
    },
  })
  let numberRentals = 0
  let sumPoints = 0
  let nextReturn = ""
  let dateNextReturn
  let userName = undefined
  let rentals = []
  for(let rental of data){
    numberRentals = numberRentals + 1
    sumPoints = sumPoints + parseInt(rental.points)
    if(rental.rentalEnd > nextReturn){
      nextReturn = rental.rentalEnd
    }
    if(userName == undefined){
      userName = user.firstname
    }

    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const dateStart = new Date(rental.rentalStart).toLocaleDateString('de-DE', options)
    const dateEnd = new Date(rental.rentalEnd).toLocaleDateString('de-DE', options)
    const returnIn = (rental.rentalStart.getTime()-rental.rentalEnd.getTime()) / (1000*3600*24)
    dateNextReturn = new Date(nextReturn).toLocaleDateString('de-DE', options)

    let newRental = {
      instrumentObject: rental.instrumentObject,
      points: rental.points,
      rentalStart: dateStart,
      rentalEnd: dateEnd,
      returnInDays: returnIn,
    }
    rentals.push(newRental)
  }
  
  const dashboard = {
    data: rentals,
    numberRentals: numberRentals,
    sumPoints: sumPoints,
    nextReturn: dateNextReturn,
    userName: userName
  }
  console.log(dashboard)
  res.status(200).json(dashboard)
}
