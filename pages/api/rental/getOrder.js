const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const orderid = parseInt(req.query.orderid)
    var data = await prisma.order.findFirst({
        where: {
            id: orderid,
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