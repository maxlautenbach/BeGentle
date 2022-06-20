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
    await prisma.paymentInformation.update({
      where: {
        userId: parseInt(body.userid),
      },
      data: {
        variant: body.variant,
        cardnumber: body.cardnumber,
        cardowner: body.cardowner,
        carddate: body.carddate,
        ccv: body.ccv,
      },
    })
  } catch (error) {
    await prisma.paymentInformation.create({
      data: {
        userId: parseInt(body.userid),
        variant: body.variant,
        cardnumber: body.cardnumber,
        cardowner: body.cardowner,
        carddate: body.carddate,
        ccv: body.ccv,
      },
    })
  }
  res.status(200).json({ message: 'Successful' })
}
