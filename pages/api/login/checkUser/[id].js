const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.query.id),
        },
        include: {
            address: true
        }
    })
    if (user !== null) {
        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                lastActivity: new Date(),
            },
        })
        res.status(200).json({ message: 'Successful', status: user.status, data: user })
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}