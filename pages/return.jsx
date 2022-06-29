import Header from '../components/header'
import Footer from '../components/footer'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ReactStars from 'react-stars'

export default function Return() {
  const [cookies] = useCookies(['cookies'])
  const [shipping, setShipping] = useState(1)
  const router = useRouter()
  let stars

  function onClickV1() {
    setShipping(1)
  }
  function onClickV2() {
    setShipping(2)
  }

  async function returnInstrument() {
    const body = {
      rentalid: cookies.rentalid,
      rating: stars,
    }
    console.log('body')
    const res = await fetch(`http://localhost:3000/api/returnInstrument`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
    })
    const data = await res.json()

    if (data.message == 'Successful') {
      router.push(`/`)
    }
  }

  function ratingChanged(newRating) {
    console.log(newRating)
    stars = newRating
  }

  return (
    <div className=" bg-cl4 h-max w-screen">
      <Header />
      <div className="flex-grow grid grid-cols-1 place-items-center">
        <div className="w-screen sm:w-11/12 lg:w-5/6 max-w-7xl h-full sm:rounded-xl">
          <div id="overview" className="ml-7 my-5 mr-3">
            <p className=" font-gabriela text-cl1 text-2xl md:text-4xl">
              Wir hoffen du hattest eine musikalische Erfahrung!
            </p>
            <span className="md:text-xl md:pt-5">
              Schade, dass dich dein Instrument nun verlassen muss!
            </span>
            <div className="flex flex-row justify-center mt-5">
              <div className="grid grid-cols-1  rounded-xl h-min w-full">
                <div className="px-1 py-4 w-full">
                  <a className="text-3xl md:text-4xl font-bold">Versand</a>
                  <div className="py-4" />
                  <button
                    className="flex flex-row w-full h-28 drop-shadow-md bg-cl2 rounded-xl"
                    onClick={onClickV1}
                  >
                    <div className="grid grid-cols-1 place-items-center h-full px-4">
                      <svg className="w-[50px] h-[50px]">
                        <circle
                          cx={25}
                          cy={25}
                          r={20}
                          stroke="#5F7161"
                          fill="#5F7161"
                          fillOpacity={shipping == 1 ? 100 : 0}
                        />
                      </svg>
                    </div>
                    <div className="grid grid-cols-1 place-items-center h-full flex-grow">
                      <div className="grid grid-cols-1 place-items-start w-full h-max">
                        <a className="font-bold text-xl md:text-3xl">
                          Standard
                        </a>
                        <a className="lg:text-lg text-sm text-left">
                          Bitte schicke das Instrument in den nächsten zwei
                          Wochen los.
                        </a>
                      </div>
                    </div>
                  </button>
                  <div className="py-2" />
                  <button
                    className="flex flex-row w-full h-28 drop-shadow-md bg-cl2 rounded-xl"
                    onClick={onClickV2}
                  >
                    <div className="grid grid-cols-1 place-items-center h-full px-4">
                      <svg className="w-[50px] h-[50px]">
                        <circle
                          cx={25}
                          cy={25}
                          r={20}
                          stroke="#5F7161"
                          fill="#5F7161"
                          fillOpacity={shipping == 2 ? 100 : 0}
                        />
                      </svg>
                    </div>
                    <div className="grid grid-cols-1 place-items-center h-full flex-grow">
                      <div className="grid grid-cols-1 place-items-start w-full h-max">
                        <a className="font-bold text-xl md:text-3xl">Kurier</a>
                        <a className="lg:text-lg text-sm text-left">
                          <span>
                            Unser Kurier kommt das Instrument bei dir holen.{' '}
                          </span>
                          <span className=" text-cl1">8,99€</span>
                          <span> werden dir in Rechnung gestellt.</span>
                        </a>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="py-7 md:py-10 md:pt-16">
                  <p className="font-gabriela text-cl1 text-2xl md:text-4xl">
                    Bitte bewerte dein Erlebnis!
                  </p>
                  <p className="font-thin md:font-normal md:text-2xl">
                    Das hilft anderen Kunden das richtige Instrument für sich zu
                    finden.
                  </p>

                  <div className=" place-items-center pl-3 sm:hidden">
                    <ReactStars
                      count={5}
                      size={60}
                      color2={'#C16666'}
                      half={false}
                      onChange={ratingChanged}
                    />
                  </div>

                  <div className=" place-items-center pl-3 hidden sm:contents">
                    <ReactStars
                      count={5}
                      size={100}
                      color2={'#C16666'}
                      half={false}
                      onChange={ratingChanged}
                    />
                  </div>

                  <button
                    className="z-10 w-full bg-cl1 text-cl4 p-2 mb-4 mt-6 rounded-xl text-lg font-gabriela"
                    onClick={returnInstrument}
                  >
                    Jetzt verbindlich zurückgeben
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
