const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const cartid = parseInt(req.query.cartid)
    var data = await prisma.shoppingCart.findFirst({
        where: {
            id: cartid,
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
    data["rentalCount"] = data.rentals.length
    res.status(200).json(data)
}