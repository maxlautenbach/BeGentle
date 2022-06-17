const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.query.id)
        }
    })
    console.log(user)
    if (user !== null) {
        res.status(200).json({ message: "Successful" })
    } else {
        res.status(404).json({ message: "User not found" })
    }
}