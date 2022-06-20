const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    var body
    try {
        body = JSON.parse(req.body)
    } catch (error) {
        body = req.body
    }
    await prisma.shoppingCart.update({
        where: {
            id: body.cartid,
        },
        data: {
            shippingFee: body.shippingFee,
            extraFee: body.extraFee,
            monthlyPrice: body.monthlyPrice,
            totalPrice: body.totalPrice,
        }
    })
    res.status(200).json({ message: "Successful" })
}