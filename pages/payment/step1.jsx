import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

export default function Step1() {
  const [cookies] = useCookies(['cookies'])
  const cartid = cookies.cartid
  const [data, setData] = useState({ id: 1 })
  const [rentals, setRentals] = useState(<li></li>)
  useEffect(() => {
    fetch('/api/rental/getCart?cartid=' + cartid)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setRentals(data.rentals.map((item) => <li key={item.id}>{item}</li>))
      })
  }, [])
  return (
    <div className="bg-cl2 px-8 py-4 flex flex-col h-screen">
      <div className="text-cl1 font-gabriela md:text-4xl">
        Be Gentle! Bestellvorgang
      </div>
      <div className="h-max w-full py-8 grid grid-cols-1 place-items-center">
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
      <div className="bg-cl4 grid grid-cols-2 rounded-xl overflow-hidden">
        <div className="px-4 py-4">
          <a className="text-2xl font-bold">Versand</a>
        </div>
        <div className="px-4 py-4">
          <a className="text-2xl font-bold">BeGentle! Pakete</a>
        </div>
        <div className="px-4 py-4 grid grid-cols-1 place-items-center col-span-2 bg-cl1">
          <div className="w-full flex justify-end">
            <div className="grid grid-cols-2 text-cl2">
              <a className="font-light text-right pr-4 w-full">Produkte:</a>
              <a className="font-light text-right w-max">60.00€</a>
              <a className="font-light text-right pr-4 w-full">
                Zusatzprodukte:
              </a>
              <a className="font-light text-right w-max">60.00€</a>
              <a className="font-light text-right pr-4 w-full">Versand:</a>
              <a className="font-light text-right w-max">60.00€</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
