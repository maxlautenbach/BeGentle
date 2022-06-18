const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const cartid = parseInt(req.query.cartid)
    const data = await prisma.shoppingCart.findFirst({
        where: {
            id: cartid
        },
        include: {
            rentals: true
        }
    })
    res.status(200).json(data)

}