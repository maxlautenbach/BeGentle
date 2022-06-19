const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    const user = await prisma.user.update({
        where: {
            id: parseInt(body.userid),
        },
        data: {
            status: "ACTIVE",
            lastActivity: new Date(),
            lastname: body.lastname,
            firstname: body.firstname,
            password: body.password,
            email: body.email,
        }
    })
    await prisma.address.create({
        data: {
            street: body.address.street,
            number: parseInt(body.address.number),
            postCode: parseInt(body.address.postCode),
            city: body.address.city,
            userId: parseInt(body.userid)
        }
    })
    if (user !== null) {
        res.status(200).json({ message: 'Successful' })
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}