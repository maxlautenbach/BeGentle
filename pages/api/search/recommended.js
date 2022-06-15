const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const instruments = await prisma.instrumentModel.findMany({
    where: {
      AND: [{ isRecommended: true }, { isAvailable: true }],
    },
  })
  res.status(200).json(instruments.slice(0, 6))
}
