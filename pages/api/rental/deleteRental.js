const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const rentalid = parseInt(req.query.rentalid)
    const rental = await prisma.rental.findFirst({
        where: {
            id: rentalid,
        },
        include: {
            instrumentObject: true,
        },
    })
    const rentalObject = await prisma.instrumentObject.findMany({
        where: {
            AND: [
                { modelId: rental.instrumentObject.modelId },
                { currentlyRented: false },
            ],
        },
    })
    if (rentalObject.length == 0) {
        await prisma.instrumentModel.update({
            where: {
                id: rental.instrumentObject.modelId,
            },
            data: {
                isAvailable: true,
            },
        })
    }
    await prisma.instrumentObject.update({
        where: {
            id: rental.instrumentObject.id
        },
        data: {
            currentlyRented: false
        }
    })
    await prisma.rental.delete({
        where: {
            id: rentalid,
        },
    })
    res.status(200).json({ message: 'Successful' })
}