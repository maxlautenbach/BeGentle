const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createShoppingCart(userid) {
    const res = await fetch(
        `http://localhost:3000/api/rental/createCart?userid=${userid}`
    )
    const data = await res.json()
    return data.cartid
}

export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    var user
    var cartid
    if (body.status == 'TEMP') {
        user = await prisma.user.create({
            data: {
                status: 'TEMP',
            },
        })
        cartid = await createShoppingCart(user.id)
    }
    const response = {
        userid: user.id,
        cartid: cartid,
    }
    res.status(201).json(response)
}