import Image from 'next/image'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Head from 'next/head'
import Link from 'next/link'
import ReviewSVG from '../../components/reviewSVG'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

export default function DetailPage({ instrument }) {
  const router = useRouter()
  const listItems = instrument.description.map((description, index) => (
    <li key={index}>{description}</li>
  ))
  const [cookies] = useCookies(['cookies'])
  async function onClick() {
    const body = {
      userid: cookies.userid,
      cartid: cookies.cartid,
      instrumentId: instrument.id,
      price: instrument.priceInMonth,
      duration: 1,
    }
    const res = await fetch(`http://localhost:3000/api/rental/addToCart`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (data.message == 'Successful') {
      router.push('/shoppingcart')
    }
  }

  return (
    <div>
      <Head>
        <title>BeGentle! Instrumentenverleih</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-screen grid grid-cols-1 gap-0 place-items-center"
        id="page-content"
      >
        <div className="w-full h-screen flex flex-col">
          <Header />
          <div className="w-full flex-grow">
            <div className="-z-10 overflow-hidden h-max w-max bg-gradient-to-b from-black to-white bg-cover pointer-events-none">
              <Image
                src="/detailViolin.png"
                alt=""
                layout="fill"
                className="-z-10"
                objectFit="cover"
                objectpostion="center"
              />
            </div>
          </div>
          <div
            className="z-1 w-full h-max bg-cl4 rounded-t-xl grid grid-cols-1  place-items-center"
            id="Buybox"
          >
            <div className="w-5/6 max-w-7xl font-gabriela text-2xl text-cl1 py-4">
              {instrument.name}
            </div>
            <div className="w-5/6 max-w-7xl ">
              <span className="font-gabriela text-2xl text-cl5 py-1">
                {instrument.priceInMonth},00€
              </span>
              <span className="text-xs text-cl1"> im Monat</span>
            </div>
            <div className="w-5/6 max-w-7xl text-xs text-cl1 py-1">
              <p>
                <span>BeGentle! Care </span>
                <span className="text-cl5">inklusive.</span>
              </p>
              <p className="pt-0.5">
                <span>Spätestens in </span>
                <span className="text-cl5">2 Tagen</span>
                <span> bei dir.</span>
              </p>
              <p className="pt-0.5">
                <span>Deine Basis für </span>
                <span className="text-cl5">tolle Musik.</span>
              </p>
              <p className="pt-4">Wähle deine Mindestlaufzeit</p>
            </div>
            <div className="z-1 w-5/6 max-w-7xl bg-cl1 rounded-xl place-items-center border-cl1 border-2 mb-3 mt-1">
              <div className="grid grid-cols-4 text-center bg-cl4 text-cl1 rounded-t-xl">
                <div className="rounded-t-xl py-1">
                  <p className="text-s">1+</p>
                  <p className="text-xs font-light">Monate</p>
                </div>
                <div className="rounded-t-xl py-1">
                  <p className="text-s">3+</p>
                  <p className="text-xs font-light">Monate</p>
                </div>
                <div className="rounded-t-xl py-1">
                  <p className="text-s">6+</p>
                  <p className="text-xs font-light">Monate</p>
                </div>
                <div className="bg-cl1 rounded-t-xl text-cl4 py-1">
                  <p className="text-s">12+</p>
                  <p className="text-xs font-light">Monate</p>
                </div>
              </div>
              <button className="w-full" onClick={onClick}>
                <p className="text-cl4 text-center p-3 hover:bg-cl6 hover:text-cl1 rounded-b-xl transition ease-in-out">
                  Jetzt ausleihen!
                </p>
              </button>
            </div>
            <Link href="#Description" scroll={true}>
              <div>
                <p className="text-cl1 font-gabriela text-lg text-center pt-3">
                  Mehr Details
                </p>
                <div className="w-28">
                  <Image
                    src="/icons/dropdown.png"
                    alt="Hier klicken für mehr Informationen"
                    width={200}
                    height={50}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="z-1 w-full h-max bg-cl4 rounded-t-xl grid grid-cols-1  place-items-center"
          id="Description"
        >
          <div className="w-screen grid grid-cols-2 text-center">
            <div className="bg-cl1 text-cl4 font-gabriela p-2">
              {instrument.name}
            </div>
            <div className="bg-cl5 text-cl4 font-gabriela p-2 align-middel">
              Jetzt Mieten: {instrument.priceInMonth},00€
            </div>
          </div>
          <div className="text-left w-screen p-8">
            <p className="font-gabriela text-xl">Produktbeschreibung</p>
            <ul className="list-disc m-4 text-xs">{listItems}</ul>
          </div>
        </div>
      </div>
      <div className="bg-cl2 border-t-3 border-cl1 w-screen ">
        <div className="w-5/6 max-w-7xl text-xl pl-8 pr-2">
          <p className="py-2 font-gabriela">
            Unsere Kunden lieben dieses Instrument!
          </p>
          <div className="w-2/3 object-center">
            <ReviewSVG />
          </div>
          <div className="text-cl5 pt-5 pb-1">
            <p className="text-lg font-gabriela">
              {'"Klare Empfehlung, wunderbare Violine"'}
            </p>
            <p className="text-xs ">- Andreas Genet</p>
          </div>
          <div className="text-cl5 py-1">
            <p className="text-lg font-gabriela">{'"Wahnsinn"'}</p>
            <p className="text-xs">- Anonym</p>
          </div>
          <div className="text-cl5 py-1">
            <p className="text-lg font-gabriela">
              {'"Ich hatte noch keine bessere Violine"'}
            </p>
            <p className="text-xs">- Mustermann</p>
          </div>
          <div className="text-cl5 pt-1 pb-5">
            <p className="text-lg font-gabriela">
              {'"Paganini würde lächeln"'}
            </p>
            <p className="text-xs">- Manmuso</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id
  const res = await fetch('http://localhost:3000/api/instrument/' + id)
  const data = await res.json()
  return {
    props: {
      instrument: data,
    },
  }
}
