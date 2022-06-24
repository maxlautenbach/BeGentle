const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const userid = parseInt(req.query.userid)
    var data = await prisma.rental.findMany({
        where: {
            userId: userid,
        },
        include: {
            instrumentObject: {
                include: {
                    model: true,
                },
            },
        },
    })
    console.log(data)
    res.status(200).json(data)
}