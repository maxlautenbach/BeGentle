const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function round(x, digit) {
    const multiplier = Math.pow(10, digit)
    return Math.round(x * multiplier) / multiplier
}

export default async function handler(req, res) {
    const cartid = parseInt(req.query.cartid)
    const rentals = await prisma.rental.findMany({
        where: {
            shoppingCartId: cartid,
        },
    })
    var price = 0
    for (const rentalObject of rentals) {
        price += round(rentalObject.price, 2)
    }
    const totalPrice = round(price + 4.99, 2)
    var data = await prisma.shoppingCart.update({
        where: {
            id: cartid,
        },
        data: {
            rentalPrice: price,
            totalPrice: totalPrice,
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
        }
    })
    data['rentalCount'] = data.rentals.length
    res.status(200).json(data)
}