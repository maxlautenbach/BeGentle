import { useState } from 'react'
import { useRouter } from 'next/router'
import Cartitem from '../../components/cartitem'

export default function Step4({ id, res_data }) {
  const data = JSON.parse(res_data)
  function getExtra(price, rentalcount) {
    const ppi = price / rentalcount
    if (ppi == 0) {
      return 'Basic'
    } else if (ppi == 4.99) {
      return 'Care'
    } else if (ppi == 12.99) {
      return 'Care+'
    }
  }
  function getShipping(price) {
    if (price == 4.99) {
      return 'Standardversand'
    } else if (price == 8.99) {
      return 'Expressversand'
    } else if (price == 25.99) {
      return 'Kurrierversand'
    }
  }

  const router = useRouter()
  const [shippingFee] = useState(data.shippingFee)
  const [extraFee] = useState(data.extraFee)
  const [rentalPrice] = useState(data.rentalPrice)
  const [monthlyPrice] = useState(data.monthlyPrice)
  const [totalPrice] = useState(data.totalPrice)
  const [rentals] = useState(
    data.rentals.map((item) => (
      <Cartitem key={item.id} referal="finish">
        {item}
      </Cartitem>
    ))
  )
  const [extras] = useState(getExtra(data.extraFee, data.rentalCount))
  const [shipping] = useState(getShipping(data.shippingFee))

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
            fillOpacity={0}
            strokeWidth={2}
          ></circle>
          <text
            x="60%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#5f7161"
            className="text-4xl font-extralight"
          >
            3
          </text>
          <circle
            cx="85%"
            cy="35%"
            r="7%"
            stroke="#5F7161"
            fill="#5F7161"
            strokeWidth={2}
          ></circle>
          <text
            x="85%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#EFEAD8"
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
            Deine W??nsche
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
        <div className="bg-cl4 grid grid-cols-1 place-items-center rounded-xl overflow-hidden w-full max-w-5xl px-4 py-4">
          <div className="w-full text-center font-gabriela font-bold text-2xl text-cl1">
            Vielen Dank f??r deine Bestellung!
          </div>
          <div className="w-full text-center text-cl1 font-bold">
            Bestellnummer: {id}
          </div>
          <div className="w-full text-center text-cl1">
            Gebuchtes BeGentle! Paket: {extras}
          </div>
          <div className="w-full border-b-[1px] border-solid border-cl1 text-center text-cl1">
            Versandart: {shipping}
          </div>
          <ul className="w-full flex flex-col sm:flex-row place-items-center flex-grow h-96 sm:overflow-x-scroll overflow-y-scroll sm:overflow-y-none 2xl:px-4">
            {rentals}
          </ul>
          <div className="w-full grid grid-cols-1 place-items-end pb-1 font-light text-cl1">
            <div className="flex flex-row">
              <a>Produkte:</a>
              <a className="w-20 text-right">{rentalPrice.toFixed(2)}???</a>
            </div>
            <div className="flex flex-row">
              <a>Zusatzprodukte:</a>
              <a className="w-20 text-right">{extraFee.toFixed(2)}???</a>
            </div>
            <div className="flex flex-row">
              <a>Versand:</a>
              <a className="w-20 text-right">{shippingFee.toFixed(2)}???</a>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-solid border-cl1"></div>
          <div className="w-full grid grid-cols-1 place-items-end pb-4 font-semibold text-cl1">
            <div className="flex flex-row">
              <a>Heute zu zahlen:</a>
              <a className="w-20 text-right text-cl5">
                {totalPrice.toFixed(2)}???
              </a>
            </div>
            <div className="flex flex-row">
              <a>Monatliche Rate:</a>
              <a className="w-20 text-right text-cl5">
                {monthlyPrice.toFixed(2)}???
              </a>
            </div>
          </div>
          <button
            className="w-full bg-cl1 text-cl2 p-2 rounded-xl text-lg font-gabriela"
            onClick={() => router.push('/')}
          >
            Zur??ck zum Shop
          </button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id
  var res_data = ''
  await fetch('http://localhost:3000/api/rental/getOrder?orderid=' + id)
    .then((res) => res.json())
    .then((data) => {
      res_data = data
    })

  return {
    props: {
      id: id,
      res_data: JSON.stringify(res_data),
    },
  }
}
