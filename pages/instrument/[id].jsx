import Image from 'next/image'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Head from 'next/head'
import Link from 'next/link'
import ReviewSVG from '../../components/reviewSVG'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useState } from 'react'

export default function DetailPage({ instrument }) {
  console.log(instrument.stars)
  const router = useRouter()
  const listItems = instrument.description.map((description, index) => (
    <li key={index}>{description}</li>
  ))
  const [cookies] = useCookies(['cookies'])
  const [duration, setDuration] = useState(12)
  const [price, setPrice] = useState(instrument.priceInMonth)
  async function onClick() {
    const body = {
      userid: cookies.userid,
      cartid: cookies.cartid,
      instrumentId: instrument.id,
      price: price,
      duration: duration,
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

  function onClickDuration1() {
    setDuration(1), setPrice(parseInt(2 * instrument.priceInMonth))
  }
  function onClickDuration3() {
    setDuration(3), setPrice(parseInt(1.75 * instrument.priceInMonth))
  }
  function onClickDuration6() {
    setDuration(6), setPrice(parseInt(1.4 * instrument.priceInMonth))
  }
  function onClickDuration12() {
    setDuration(12), setPrice(parseInt(instrument.priceInMonth))
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
            <div className="w-5/6 max-w-7xl font-gabriela text-2xl text-cl1 py-4 md:text-5xl md:py-8">
              {instrument.name}
            </div>
            <div className="w-5/6 max-w-7xl ">
              <span className="font-gabriela text-2xl text-cl5 py-1 md:text-4xl">
                {price},00€
              </span>
              <span className="text-md text-cl1 p-2 md:text-xl">im Monat</span>
            </div>
            <div className="w-5/6 max-w-7xl text-xs text-cl1 py-1 md:text-lg md:py-8">
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
              <p className="pt-4 md:pt-8">Wähle deine Mindestlaufzeit</p>
            </div>
            <div className="z-1 w-5/6 max-w-7xl bg-cl1 rounded-xl place-items-center border-cl1 border-2 mb-3 mt-1 ">
              <div className="grid grid-cols-4 text-center bg-cl4 text-cl1 rounded-t-xl">
                <button
                  onClick={onClickDuration1}
                  className={
                    duration == 1
                      ? 'rounded-t-xl py-1 bg-cl1 text-cl4'
                      : 'rounded-t-xl py-1 bg-cl4'
                  }
                >
                  <p className="text-s md:text-2xl md:font-semibold">1</p>
                  <p className="text-xs font-light md:text-lg md:font-normal">
                    Monate
                  </p>
                </button>
                <button
                  onClick={onClickDuration3}
                  className={
                    duration == 3
                      ? 'rounded-t-xl py-1 bg-cl1 text-cl4'
                      : 'rounded-t-xl py-1 bg-cl4'
                  }
                >
                  <p className="text-s md:text-2xl md:font-semibold">3</p>
                  <p className="text-xs font-light md:text-lg md:font-normal">
                    Monate
                  </p>
                </button>
                <button
                  onClick={onClickDuration6}
                  className={
                    duration == 6
                      ? 'rounded-t-xl py-1 bg-cl1 text-cl4'
                      : 'rounded-t-xl py-1 bg-cl4'
                  }
                >
                  <p className="text-s md:text-2xl md:font-semibold">6</p>
                  <p className="text-xs font-light md:text-lg md:font-normal">
                    Monate
                  </p>
                </button>
                <button
                  onClick={onClickDuration12}
                  className={
                    duration == 12
                      ? 'rounded-t-xl py-1 bg-cl1 text-cl4'
                      : 'rounded-t-xl py-1 bg-cl4'
                  }
                >
                  <p className="text-s md:text-2xl md:font-semibold">12</p>
                  <p className="text-xs font-light md:text-lg md:font-normal">
                    Monate
                  </p>
                </button>
              </div>
              <button className="w-full" onClick={onClick}>
                <p className="text-cl4 text-center p-3 hover:bg-cl6 hover:text-cl1 rounded-b-xl transition ease-in-out md:text-3xl md:p-5 ">
                  Jetzt ausleihen!
                </p>
              </button>
            </div>
            <Link href="#Description" scroll={true}>
              <div>
                <p className="text-cl1 font-gabriela text-lg text-center pt-3 md:text-2xl md:pt-7">
                  Mehr Details
                </p>
                <div className="w-36">
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
          <div className="w-screen grid grid-cols-2 text-center md:place-content-center md:pt-5">
            <div className="bg-cl1 text-cl4 font-gabriela p-2 md:text-xl md:py-5">
              {instrument.name}
            </div>
            <div className="bg-cl5 text-cl4 font-gabriela p-2 align-middel md:text-xl md:py-5">
              Jetzt Mieten: {instrument.priceInMonth},00€
            </div>
          </div>
          <div className="text-left w-5/6 py-8">
            <p className="font-gabriela text-xl md:text-3xl">
              Produktbeschreibung
            </p>
            <ul className="list-disc m-4 text-xs md:text-xl">{listItems}</ul>
          </div>
        </div>
      </div>
      <div className="bg-cl2 border-t-3 border-cl1  ">
        <div className="w-screen p-7 md:pl-24">
          <div className="  text-xl pl-8 pr-3 md:text-2xl">
            <p className="py-2 font-gabriela mb-3 md:text-3xl">
              Unsere Kunden lieben dieses Instrument!
            </p>
            <div className="grid grid-cols-2 place-items-center max-w-6xl md:py-5">
              <ReviewSVG>{instrument.stars}</ReviewSVG>
              <div className="place-content-center">
                <span className=" font-gabriela text-3xl text-cl5 pl-4 md:text-7xl md:pl-8 lg:text-9xl ">
                  {instrument.stars}
                </span>
                <span className="font-gabriela text-2xl text-cl5 pl-1 pr-3 md:text-5xl md:pr-6 lg:text-8xl ">
                  / 5
                </span>
                <span className="text-cl5 font-gabriela text-2xl md:text-5xl lg:text-8xl">
                  Sterne
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-8">
              <div className="text-cl5 py-1 md:py-3">
                <p className="text-lg font-gabriela md:text-3xl">
                  {'"Klare Empfehlung, wunderbares Instrument"'}
                </p>
                <p className="text-xs md:text-xl">- Andreas Genet</p>
              </div>
              <div className="text-cl5 py-1 md:py-3">
                <p className="text-lg font-gabriela md:text-3xl">
                  {'"Wahnsinn"'}
                </p>
                <p className="text-xs md:text-xl">- Anonym</p>
              </div>
              <div className="text-cl5 py-1 md:py-3">
                <p className="text-lg font-gabriela md:text-3xl">
                  {'"Ich habe noch nie bessere Musik gemacht"'}
                </p>
                <p className="text-xs md:text-xl">- Achim Meier</p>
              </div>
              <div className="text-cl5 py-1 md:py-3">
                <p className="text-lg font-gabriela md:text-3xl">
                  {'"Lässt sich so gut spielen"'}
                </p>
                <p className="text-xs md:text-xl">- Manmuso</p>
              </div>
            </div>
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
