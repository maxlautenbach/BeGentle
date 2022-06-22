const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const InstrumentModelData = [
  {
    name: 'Stentor SR1864 Verona Violin 4/4',
    description: [
      'Größe: 4/4',
      'handgearbeitet',
      'massive Fichtendecke',
      'massive schön geflammte Ahornzargen',
      'massiver schön geflammter Ahornboden',
      'massiver Ahornhals',
      'Shellax-Lackierung',
      'Ebenholzgriffbrett',
      'hochwertige Ebenholzstimmwirbel',
      'dekorative Randeinlage',
      'Kinnhalter aus Hartholz',
      'Wittner Saitenhalter',
      'Aubert Steg',
      'mit Pirastro Tonica Saiten bezogen',
      'inkl. hochwertigem Holzbogen mit echtem Pferdehaar und gut ausgebautem Ebenholzfrosch und hochwertigem "De Luxe" Koffer',
    ],
    imageURL: '/instruments/id1.png',
    priceInMonth: 49,
    model: '-',
    instrumentTypId: 2,
    isRecommended: true,
  },
  {
    name: 'Karl Höfner Stradivari 4/4 Violin Outfit',
    description: [
      'Größe: 4 / 4',
      'Karl Höfner H115 - AS - V Violine',
      'Stradivari Modell',
      'Instrument für gehobene Ansprüche in Handarbeit gefertigt aus ausgesuchten europäischen Tonhölzern',
      'Zargen,',
      'Hals und Steg aus Ahorn',
      'Fichtendecke',
      'Ebenholzgriffbrett',
      'Ebenholzgarnitur',
      'antik lackiert',
      'Dominant Saiten',
      'inkl.H90 / EX - Vs Etui und H8 / 4 - V Bogen ',
    ],
    imageURL: '/instruments/id2.png',
    priceInMonth: 139,
    model: '-',
    instrumentTypId: 2,
    isRecommended: true,
  },
  {
    name: 'Roth & Junius RJVE Antiqued Violin Set 4/4',
    description: [
      'Größe: 4/4',
      'hergestellt aus Europäischer Fichte und Europäischem Ahorn',
      'massive Fichtendecke',
      'massiver Ahornboden',
      'Hals und Zargen aus Ahorn',
      'Ebenholzgriffbrett',
      'Feinstimmsaitenhalter',
      'mit Antik-Style Lackierung',
      'Besaitung: Thomastik Dominant',
      'inkl. Etui, Kolofon und Bogen',
    ],
    imageURL: '/instruments/id3.png',
    priceInMonth: 29,
    model: '-',
    instrumentTypId: 2,
    isRecommended: true,
  },
  {
    name: 'Harley Benton D-120CE NT',
    description: [
      'Bauform: Dreadnought mit Cutaway',
      'Decke: Fichte',
      'Boden und Zargen: Mahagoni',
      'Hals: Mahagoni',
      'Halsprofil: C',
      'Dovetail Halsverbindung',
      'Griffbrett: Roseacer',
      'cremefarbene Bindings an Korpus und Hals',
      '20 Bünde',
      'Mensur: 650 mm',
      'Sattelbreite: 42,5 mm',
      'Dot-Griffbretteinlagen',
      'Steg: Roseacer',
      'Tonabnehmer mit Preamp mit 4-Band EQ',
      'verchromte DieCast Mechaniken',
      'Saitenstärke ab Werk: .010 - .047',
      'Farbe: Natur Hochglanz',
    ],
    imageURL: '/instruments/id4.png',
    priceInMonth: 9,
    model: '-',
    instrumentTypId: 4,
    isRecommended: true,
  },
  {
    name: 'Harley Benton ST-20HSS SBK Standard Series',
    description: [
      'Korpus: Linde',
      'geschraubter Hals: Ahorn',
      'Griffbrett: Amaranth',
      'DOT Griffbretteinlagen',
      'Halsprofil: Modern "C"',
      'Mensur: 648 mm',
      'Griffbrettradius: 305 mm',
      'Sattelbreite: 42 mm',
      '22 Bünde',
      'Tonabnehmer: 1 Humbucker (Steg) und 2 Single Coils (Mitte und Hals)',
      '1 Volume- und 2 Tonregler',
      '5-Wege Tonabnehmerwahlschalter',
      'Double-Action Halsstab',
      'synchronized Tremolo',
      'DieCast Mechaniken',
      'schwarze Hardware',
      'Werksbesaitung: .009 - .042',
      'Farbe: Schwarz matt',
    ],
    imageURL: '/instruments/id5.png',
    priceInMonth: 9,
    model: '-',
    instrumentTypId: 5,
    isRecommended: true,
  },
  {
    name: 'Harley Benton R-458 WH Fanfret',
    description: [
      'Progressive Serie',
      'Lindekorpus',
      'geschraubter Ahornhals',
      'Ahorngriffbrett',
      'Offset Dot Griffbretteinlagen',
      'Halsprofil: Speed D',
      'Griffbrettradius: 350 mm',
      'Multi-Scale Mensur: 692 / 650 mm',
      'Sattelbreite: 54 mm',
      'Dual Action Trussrod',
      '24 Medium gefächerte Jumbo Frets',
      'Tonabnehmer: 2 Hi-Gain Humbucker',
      '1 Volume- und 1 Tonregler',
      '3-Weg Tonabnehmer Wahlschalter',
      'Nubone Sattel',
      'schwarze Hardware',
      'Saitenstärken ab Werk: .009/.011/.016/.024/.032/.042/.054/.065',
      'Stimmung ab Werk: F# / B / E / A / D / G / B / E',
      'Deluxe DieCast Mechaniken',
      'Farbe: Weiß Hochglanz',
    ],
    imageURL: '/instruments/id6.png',
    priceInMonth: 9,
    model: '-',
    instrumentTypId: 5,
    isRecommended: true,
  },
  {
    name: 'Manuel Rodriguez Tesoro de la Bodega Limited',
    description: [
      'Private Stock Modell - limitiert auf 84 Exemplare',
      'Decke: massiv Rotzeder',
      'Boden und Zargen: massiv Walnuss',
      'Armauflage: massiv Walnuss',
      'Hals: Cedro mit Ebenholzeinlage',
      'Griffbrett: Ebenholz',
      'Sattelbreite: 52 mm',
      'Mensur: 650 mm',
      'originaler spanischer Halsfuß',
      'Moreno 12-Loch Steg',
      'handgefeilter Sattel und Stegeinlage aus geöltem Vintage-Knochen',
      'Rubner Custom Mechanik mit MR Gravur',
      'Besaitung: Hannabach 815HTC',
      'Finish: Schellack',
      'Farbe: Natur',
      'inkl. Prestige Koffer und Gewa Awakener',
      'hergestellt in Europa',
    ],
    imageURL: '/instruments/id7.png',
    priceInMonth: 89,
    model: '-',
    instrumentTypId: 4,
  },
  {
    name: 'Ketron SD 9',
    description: [
      '76 halbgewichtete Tasten mit Dynamic Control ( 4 Kurven) und Aftertouch',
      '7" Touch Display',
      'Launchpad - bis zu 2048 Projekte',
      '12 Pads mit 6 Arranger-Bereich mit 300 Styles',
      'Audio Drums, mehr als 600 drum loops',
      'Live Guitar, mehr als 100 Audio Live Gitarren Vorlagen',
      'Style Modelling',
      'neue Orchesterklänge',
      '670 Sounds',
      '48 Drum Sets',
      'Song-Drum-Restyle',
      '4 Blöcke mit jeweils 1024 Registrationsspeicher',
      'Transposer',
      'dualer Profi-Player für MIDI, MP3, WAV, FLV, CDG, MP4, AVI, M4A, JPG, PdF, TXT Dateien',
      'Audio und Midi Recording',
      'DSP-Effecte',
      'Interner Speicher 16 GB SSD-Card',
      'bis zu 700 MB User RAM',
      'Midi In/Out/Thru',
      '3x USB to Device',
      'DVI Monitor Out',
      'Line Out L/R Stereo',
      'Mikrofonausgang',
      'Sustain-Pedal Anschluss',
      'Kopfhöreranschluss',
      'Abmessungen (B x T x H): 1085 x 400 x 145 mm',
      'Gewicht: 16 kg',
    ],
    imageURL: '/instruments/id8.png',
    priceInMonth: 89,
    model: '-',
    instrumentTypId: 6,
  },
  {
    name: 'Thomann SP-5600',
    description: [
      '88 Tasten mit Hammermechanik',
      '600 Sounds',
      '230 Styles (10 User Styles)',
      '120 interne Songs',
      '128-stimmige Polyphonie',
      'Arranger Funktion: Start/Stop, Sync Start, Intro/Ending, Fill A, Fill B',
      'Funktionen: Duo (Twinova), Split, Layer, Sustain',
      'One Touch Setting',
      'Metronom',
      'DSP Effekte',
      'Master EQ',
      'Reverb',
      'Chorus',
      'Sequencer',
      'Performance Assistant',
      'Harmony',
      '5 Demosongs',
      '1 Pedal',
      'Transpose-Funktion',
      'Pitch Bend',
      'Kopfhörerausgang 2x Standard',
      'Mikrofon Eingang',
      'Stereo Aux Out',
      'Stereo Aux In',
      'Midi In/Out USB',
      'Lautsprecher 2 x 10 W',
      'Abmessungen (B x T x H) : 1365 x 366 x 137 mm',
      'Gewicht 13,8 kg',
      'inkl. Sustain-Pedal, Notenablage und Netzteil',
    ],
    imageURL: '/instruments/id9.png',
    priceInMonth: 39,
    model: '-',
    instrumentTypId: 6,
  },
  {
    name: 'Yamaha P-125 BK',
    description: [
      'Graded-Hammer-Standard-Tastatur (GHS) mit 88 gewichteten Tasten',
      'Pure CF Sound Engine',
      '24 Klangfarben',
      'max. Polyphonie: 192 Stimmen',
      'Dual-, Split- und Duo-Funktion',
      'Zweispur-Aufnahme (ein Song)',
      '20 Rhythmen (Schlagzeug + Bass)',
      'Intelligent Acoustic Control',
      '21 Demo-Songs und 50 Piano-Songs',
      'integrierte Effekte: Reverb',
      'Dämpferresonanz',
      'Sound Boost, EQ',
      'MIDI via USB zum Anschluss an Computer oder iOS und Android-Geräte',
      'eingebautes Metronom',
      'Tempo/Transpose und Tuning einstellbar',
      'integrierte Lautsprecher mit 2x 7 W Leistung',
      'Line-Ausgang Stereo 6,3 mm Klinke (L/L+R/R)',
      '2 Kopfhörer-Ausgänge 6,3mm Stereo',
      'Eingang für Sustainpedal',
      'Abmessungen (B x H x T): 1326 x 166 x 295 mm',
      'Gewicht: 11,8 kg',
      'Farbe: Schwarz',
      'inkl. Sustainpedal, Notenhalter und Netzteil',
      'kostenlose App "Smart Pianist " für iPhone/iPad downloadbar (zusätzliches Verbindungskabel erforderlich / nicht im Lieferumfang enthalten)',
    ],
    imageURL: '/instruments/id10.png',
    priceInMonth: 59,
    model: '-',
    instrumentTypId: 6,
  },
]

const Address = [
  {
    street: "Coblitzallee",
    city: "Mannheim",
    country: "Deutschland",
    userId: 1
  }
]

const User = [
  {
    lastname: "Koellschen",
    firstname: "Franziska",
    email: "franziska.koellschen@mail.com",
    password: "password",
    punkte: 1234,
    phone: "015732033118"
  },
  {
    lastname: "Lautenbach",
    firstname: "Max",
    email: "max.lautenbach@mail.com",
    password: "password",
    punkte: 1098,
    phone: "015732034975"
  }
]

const InstrumentObjectData = [
  { 
    currentlyRented: true,
    modelId: 1,
  },
  {
    currentlyRented: true,
    modelId: 2,
  },
  {
    currentlyRented: true,
    modelId: 3,
  },
  {
    modelId: 4,
  },
  {
    modelId: 5,
  },
  {
    modelId: 6,
  },
  {
    modelId: 7,
  },
  {
    modelId: 8,
  },
  {
    modelId: 9,
  },
  {
    modelId: 10,
  },
]

const Order = [
  {
    userId: 1,
    rentalPrice: 300.00,
    totalPrice: 304.99,
    monthlyPrice: 25.00
  }
]

const Rental = [
  {
    instrumentObjectId: 1,
    userId: 1,
    duration: 12,
    bookedAt: '2022-03-17',
    rentalStart: '2022-04-01',
    rentalEnd: '2023-04-01',
    points: 334,
    orderId: 1,
    price: 304.99
  }
]

const CategoryData = [
  {
    name: 'Streichinstrumente',
  },
  {
    name: 'Violinen',
    overCategoryId: 1,
  },
  {
    name: 'Gitarre',
  },
  {
    name: 'Konzertgitarre',
    overCategoryId: 3,
  },
  {
    name: 'E-Gitarre',
    overCategoryId: 3,
  },
  {
    name: 'Keyboards',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const data of CategoryData) {
    const Category = await prisma.Category.create({
      data: data,
    })
    console.log(`Created category with id: ${Category.id}`)
  }
  for (const data of InstrumentModelData) {
    const InstrumentModel = await prisma.InstrumentModel.create({
      data: data,
    })
    console.log(`Created instrument model with id: ${InstrumentModel.id}`)
  }
  for (const data of InstrumentObjectData) {
    const instrumentObject = await prisma.instrumentObject.create({
      data: data,
    })
    console.log(`Created instrument object with id: ${instrumentObject.id}`)
  }
  for (const data of User) {
    const user = await prisma.user.create({
      data: data,
    })
    console.log(`Created instrument object with id: ${user.id}`)
  }
  for (const data of Address) {
    const address = await prisma.address.create({
      data: data,
    })
    console.log(`Created instrument object with id: ${address.id}`)
  }
  for (const data of Order) {
    const order = await prisma.order.create({
      data: data,
    })
    console.log(`Created instrument object with id: ${order.id}`)
  }
  for (const data of Rental) {
    const rental = await prisma.rental.create({
      data: data,
    })
    console.log(`Created instrument object with id: ${rental.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
