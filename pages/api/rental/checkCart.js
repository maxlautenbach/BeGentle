const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const userid = parseInt(req.query.userid)
    const data = await prisma.shoppingCart.findFirst({
        where: {
            userId: userid
        }
    })
    console.log(data)
    res.status(200).json({ message: "Successful" })

}