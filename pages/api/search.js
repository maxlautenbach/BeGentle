const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { name } = req.query
    var instruments = []
    var result
    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
        },
    })
    const searchCategories = categories.filter((el) => el.name.includes(name))
    const categoriesId = searchCategories.map((x) => x.id)

    if (categoriesId.length > 0) {
        result = []
        var entries = await prisma.instrumentModel.findMany({
            where: {
                instrumentTypId: { in: categoriesId },
            },
            select: {
                id: true,
                name: true,
                priceInMonth: true,
                imageURL: true,
            },
        })
        for (var i = 0; i < entries.length; i++) {
            var el = entries[i]
            result.push(el)
        }
        instruments = result
    }

    if (name != '') {
        const allInstruments = prisma.instrumentModel.findMany({
            select: {
                id: true,
                name: true,
            },
        })
        const searchInstruments = (await allInstruments).filter((el) =>
            el.name.includes(name)
        )
        const instrumentsId = searchInstruments.map((x) => x.id)
        entries = await prisma.instrumentModel.findMany({
            where: {
                id: { in: instrumentsId },
            },
            select: {
                id: true,
                name: true,
                priceInMonth: true,
                imageURL: true,
            },
        })
        if (instruments.length == 0) {
            result = []
            for (i = 0; i < entries.length; i++) {
                el = entries[i]
                result.push(el)
            }
            instruments = result
        } else {
            for (i = 0; i < entries.length; i++) {
                el = entries[i]
                if (
                    instruments.find((x) => x.id == el.id) === -1 ||
                    instruments.length == 0
                ) {
                    instruments = instruments.push(el)
                }
            }
        }
    }

    if (instruments.length > 0) {
        res.status(200).json(instruments)
    } else {
        res.status(404).json({ message: 'No elements found!' })
    }
}