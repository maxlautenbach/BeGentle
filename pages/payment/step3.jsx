import { useState } from 'react'
import { useCookies } from 'react-cookie'
import Image from 'next/image'

export default function Step2({ res_data }) {
  const data = JSON.parse(res_data)
  const [cookies] = useCookies(['cookies'])
  const [shippingFee] = useState(data.shippingFee)
  const [extraFee] = useState(data.extraFee)
  const [rentalPrice] = useState(data.rentalPrice)
  const [monthlyPrice] = useState(data.monthlyPrice)
  const [totalPrice] = useState(data.totalPrice)

  return (
    <div className="bg-cl2 px-8 py-4 flex flex-col w-screen min-h-screen">
      <div className="text-cl1 font-gabriela text-4xl lg:py-0 py-6">
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
            fillOpacity={0}
          ></circle>
          <text
            x="10%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5F7161"
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
            fill="#5F7161"
            strokeWidth={2}
          ></circle>
          <text
            x="60%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#EFEAD8"
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
      <div className="w-full flex flex-row justify-center">
        <div className="bg-cl4 grid grid-cols-1 rounded-xl overflow-hidden max-w-5xl">
          <div className={'px-6 py-4 w-full h-max'}>
            <a className="text-3xl lg:text-2xl font-bold">Zahlung via Stripe</a>
            <div className="h-80 text-center grid grid-cols-1 place-items-center">
              <div>
                <p className="text-cl1 font-light">
                  Du übermittels selbst deine Zahldaten an deinen gewünschten
                  Zahlungsdienstleister. Den Rest übernehmen wir. Natürlich
                  sicher.
                </p>
                <div className="py-2"></div>
                <div className="w-full h-20 relative">
                  <Image
                    src="/icons/payment/shield.png"
                    alt="Leider gibt es zu diesem Instrument kein Bild"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-6 py-4 grid grid-cols-1 place-items-center lg:col-span-2 bg-cl1"
            id="Summary"
          >
            <div className="w-full grid grid-cols-1 place-items-end pb-1 font-light text-cl2">
              <div className="flex flex-row">
                <a>Produkte:</a>
                <a className="w-20 text-right">{rentalPrice.toFixed(2)}€</a>
              </div>
              <div className="flex flex-row">
                <a>Zusatzprodukte:</a>
                <a className="w-20 text-right">{extraFee.toFixed(2)}€</a>
              </div>
              <div className="flex flex-row">
                <a>Versand:</a>
                <a className="w-20 text-right">{shippingFee.toFixed(2)}€</a>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-solid border-cl2"></div>
            <div className="w-full grid grid-cols-1 place-items-end pb-4 font-semibold text-cl2">
              <div className="flex flex-row">
                <a>Heute zu zahlen:</a>
                <a className="w-20 text-right text-cl5">
                  {totalPrice.toFixed(2)}€
                </a>
              </div>
              <div className="flex flex-row">
                <a>Monatliche Rate:</a>
                <a className="w-20 text-right text-cl5">
                  {monthlyPrice.toFixed(2)}€
                </a>
              </div>
            </div>
            <form
              action={`http://localhost:3000/api/checkout?cartid=${cookies.cartid}&userid=${cookies.userid}`}
              method="POST"
              className="w-full"
            >
              <button className="w-full bg-cl2 p-2 rounded-xl text-lg font-gabriela">
                {'Weiter zum Zahlungsdienstleister'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const cookies = context.req.cookies
  var res_data = ''
  await fetch(
    'http://localhost:3000/api/rental/getCart?cartid=' + cookies.cartid
  )
    .then((res) => res.json())
    .then((data) => {
      res_data = data
    })
  return {
    props: {
      res_data: JSON.stringify(res_data),
    },
  }
}
