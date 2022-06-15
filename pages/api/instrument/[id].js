const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res){
    const { id } = req.query
    const instrumentModel = await prisma.instrumentModel.findUnique({
        where: {
            id: Number(id),
        },
    })
    res.status(200).json(instrumentModel)
}