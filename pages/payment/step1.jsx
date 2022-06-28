import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

export default function Step1({ res_data, rentalCount, rentalPrice }) {
  const router = useRouter()
  const [cookies] = useCookies(['cookies'])
  const [shipping, setShipping] = useState(1)
  const [shippingFee, setShippingFee] = useState('4.99')
  const [extra, setExtra] = useState(1)
  const [extraFee, setExtraFee] = useState('0.00')
  const data = JSON.parse(res_data)

  function round(x, digit) {
    const multiplier = Math.pow(10, digit)
    return Math.round(parseFloat(x) * multiplier) / multiplier
  }
  function onClickV1() {
    setShipping(1)
    setShippingFee('4.99')
  }
  function onClickV2() {
    setShipping(2)
    setShippingFee('8.99')
  }
  function onClickV3() {
    setShipping(3)
    setShippingFee('25.99')
  }
  function onClickE1() {
    setExtra(1)
    setExtraFee('0.00')
  }
  function onClickE2() {
    setExtra(2)
    setExtraFee('4.99')
  }
  function onClickE3() {
    setExtra(3)
    setExtraFee('12.99')
  }

  async function onClick() {
    const body = {
      cartid: parseInt(cookies.cartid),
      shippingFee: parseFloat(shippingFee),
      extraFee: parseFloat(extraFee) * rentalCount,
      monthlyPrice: round(rentalPrice + parseFloat(extraFee) * rentalCount, 2),
      totalPrice: round(
        rentalPrice +
          parseFloat(extraFee) * rentalCount +
          parseFloat(shippingFee),
        2
      ),
    }
    const res = await fetch(`http://localhost:3000/api/rental/updateCart`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (data.message == 'Successful') {
      router.push('/payment/step2')
    }
  }
  return (
    <div className="bg-cl2 px-8 py-4 flex flex-col w-screen min-h-screen">
      <div className="text-cl1 font-gabriela text-4xl lg:py-0 py-6 w-full max-w-5xl">
        Be Gentle! Bestellvorgang
      </div>
      <div className="h-max w-full py-8 lg:grid grid-cols-1 place-items-center hidden">
        <svg className="h-[150px] w-[850px]">
          <circle
            cx="10%"
            cy="35%"
            r="7%"
            fill="#5F7161"
            stroke="#5F7161"
            strokeWidth={2}
          ></circle>
          <text
            x="10%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#EFEAD8"
            className="text-4xl font-extralight"
          >
            1
          </text>
          <circle
            cx="35%"
            cy="35%"
            r="7%"
            stroke="#5F7161"
            fillOpacity={0}
            strokeWidth={2}
          ></circle>
          <text
            x="35%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className="text-4xl font-extralight"
          >
            2
          </text>
          <circle
            cx="60%"
            cy="35%"
            r="7%"
            stroke="#5F7161"
            fillOpacity={0}
            strokeWidth={2}
          ></circle>
          <text
            x="60%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className="text-4xl font-extralight"
          >
            3
          </text>
          <circle
            cx="85%"
            cy="35%"
            r="7%"
            stroke="#5F7161"
            fillOpacity={0}
            strokeWidth={2}
          ></circle>
          <text
            x="85%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className="text-4xl font-extralight"
          >
            4
          </text>
          <line
            x1="15%"
            y1="35%"
            x2="30%"
            y2="35%"
            stroke="#5F7161"
            strokeWidth={2}
          />
          <line
            x1="40%"
            y1="35%"
            x2="55%"
            y2="35%"
            stroke="#5F7161"
            strokeWidth={2}
          />
          <line
            x1="65%"
            y1="35%"
            x2="80%"
            y2="35%"
            stroke="#5F7161"
            strokeWidth={2}
          />
          <text
            x="10%"
            y="80%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className=""
          >
            Deine Wünsche
          </text>
          <text
            x="35%"
            y="80%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className=""
          >
            Deine Daten
          </text>
          <text
            x="60%"
            y="80%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className=""
          >
            Bezahlung
          </text>
          <text
            x="85%"
            y="80%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
            className=""
          >
            Bestellabschluss
          </text>
        </svg>
      </div>
      <div className="flex flex-row justify-center">
        <div className="bg-cl4 grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden w-full max-w-5xl">
          <div className="px-6 py-4 w-full">
            <a className="text-3xl lg:text-2xl font-bold">Versand</a>
            <div className="py-4" />
            <button
              className="flex flex-row w-full h-28 drop-shadow-xl bg-cl2 rounded-xl"
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
                  <a className="font-bold text-xl lg:text-2xl">Standard</a>
                  <a className="lg:text-base text-sm text-left">
                    Lieferzeit: 2 Werktage
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl">4,99€</a>
                </div>
              </div>
            </button>
            <div className="py-2" />
            <button
              className="flex flex-row w-full h-28 drop-shadow-xl bg-cl2 rounded-xl"
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
                  <a className="font-bold text-xl lg:text-2xl">Express</a>
                  <a className="lg:text-base text-sm text-left">
                    Lieferzeit: 24 Stunden
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl">8,99€</a>
                </div>
              </div>
            </button>
            <div className="py-2" />
            <button
              className="flex flex-row w-full h-28 drop-shadow-xl bg-cl2 rounded-xl"
              onClick={onClickV3}
            >
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <svg className="w-[50px] h-[50px]">
                  <circle
                    cx={25}
                    cy={25}
                    r={20}
                    stroke="#5F7161"
                    fill="#5F7161"
                    fillOpacity={shipping == 3 ? 100 : 0}
                  />
                </svg>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full flex-grow">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-2xl hidden lg:flex">
                    Be Gentle! Kurrier
                  </a>
                  <a className="font-bold text-xl lg:hidden">Kurrier</a>
                  <a className="lg:text-base text-sm text-left">
                    Lieferzeit: 3-6 Stunden
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl pr-2">25,99€</a>
                </div>
              </div>
            </button>
          </div>
          <div className="px-6 py-4 w-full">
            <a className="text-3xl lg:text-2xl font-bold">BeGentle! Pakete</a>
            <div className="py-4" />
            <button
              className="flex flex-row w-full h-28 drop-shadow-xl bg-cl2 rounded-xl"
              onClick={onClickE1}
            >
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <svg className="w-[50px] h-[50px]">
                  <circle
                    cx={25}
                    cy={25}
                    r={20}
                    stroke="#5F7161"
                    fill="#5F7161"
                    fillOpacity={extra == 1 ? 100 : 0}
                  />
                </svg>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full flex-grow">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl">Basic</a>
                  <a className="lg:text-base text-sm text-left sm:hidden">
                    Diebstahl-versicherung
                  </a>
                  <a className="lg:text-base text-sm text-left hidden sm:flex">
                    Diebstahlversicherung
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl w-full text-right pr-2">
                    0,00€
                  </a>
                </div>
              </div>
            </button>
            <div className="py-2" />
            <button
              className="flex flex-row w-full h-28 drop-shadow-xl bg-cl2 rounded-xl"
              onClick={onClickE2}
            >
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <svg className="w-[50px] h-[50px]">
                  <circle
                    cx={25}
                    cy={25}
                    r={20}
                    stroke="#5F7161"
                    fill="#5F7161"
                    fillOpacity={extra == 2 ? 100 : 0}
                  />
                </svg>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full flex-grow">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl">Care</a>
                  <a className="lg:text-base text-xs text-left">
                    Alle Dienste von Care und
                  </a>
                  <a className="lg:text-base text-xs text-left">
                    Selbstverschuldete Schäden
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl w-full text-right pr-2">
                    4,99€
                  </a>
                </div>
              </div>
            </button>
            <div className="py-2" />
            <button
              className="flex flex-row w-full h-28 drop-shadow-xl bg-cl2 rounded-xl"
              onClick={onClickE3}
            >
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <svg className="w-[50px] h-[50px]">
                  <circle
                    cx={25}
                    cy={25}
                    r={20}
                    stroke="#5F7161"
                    fill="#5F7161"
                    fillOpacity={extra == 3 ? 100 : 0}
                  />
                </svg>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full flex-grow">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl sm:text-xl lg:text-2xl">
                    Care+
                  </a>
                  <a className="lg:text-base text-xs text-left">
                    Alle Dienste von Care+{' '}
                  </a>
                  <a className="lg:text-base text-xs text-left">
                    monatl. Inspektionen
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 place-items-center h-full px-4">
                <div className="grid grid-cols-1 place-items-start w-full h-max">
                  <a className="font-bold text-xl lg:text-2xl w-full text-right pr-4">
                    12,99€
                  </a>
                </div>
              </div>
            </button>
          </div>
          <div
            className="px-6 py-4 grid grid-cols-1 place-items-center lg:col-span-2 bg-cl1"
            id="Summary"
          >
            <div className="w-full grid grid-cols-1 place-items-end pb-1 font-light text-cl2">
              <div className="flex flex-row">
                <a>Produkte:</a>
                <a className="w-20 text-right">{data.rentalPrice}.00€</a>
              </div>
              <div className="flex flex-row">
                <a>Zusatzprodukte:</a>
                <a className="w-20 text-right">
                  {round(parseFloat(extraFee) * rentalCount, 2).toFixed(2)}€
                </a>
              </div>
              <div className="flex flex-row">
                <a>Versand:</a>
                <a className="w-20 text-right">{shippingFee}€</a>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-solid border-cl2"></div>
            <div className="w-full grid grid-cols-1 place-items-end pb-4 font-semibold text-cl2">
              <div className="flex flex-row">
                <a>Heute zu zahlen:</a>
                <a className="w-20 text-right text-cl5">
                  {round(
                    data.rentalPrice +
                      parseFloat(extraFee) * rentalCount +
                      parseFloat(shippingFee),
                    2
                  )}
                  €
                </a>
              </div>
              <div className="flex flex-row">
                <a>Monatliche Rate:</a>
                <a className="w-20 text-right text-cl5">
                  {parseFloat(
                    round(
                      data.rentalPrice + parseFloat(extraFee) * rentalCount,
                      2
                    )
                  ).toFixed(2)}
                  €
                </a>
              </div>
            </div>
            <button
              className="w-full bg-cl2 p-2 rounded-xl text-lg font-gabriela"
              onClick={onClick}
            >
              Weiter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const cookies = context.req.cookies
  var res_data = ''
  var rentalCount = ''
  var rentalPrice = ''

  await fetch(
    'http://localhost:3000/api/rental/getCart?cartid=' + cookies.cartid
  )
    .then((res) => res.json())
    .then((data) => {
      res_data = data
      rentalCount = data.rentalCount
      rentalPrice = data.rentalPrice
    })

  return {
    props: {
      res_data: JSON.stringify(res_data),
      rentalCount: rentalCount,
      rentalPrice: rentalPrice,
    },
  }
}
