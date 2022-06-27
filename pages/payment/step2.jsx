import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

export default function Step2({ res_data, user_data }) {
  const router = useRouter()
  const data = JSON.parse(res_data)
  const userdata = JSON.parse(user_data)
  const [cookies] = useCookies(['cookies'])
  const [shippingFee] = useState(data.shippingFee)
  const [extraFee] = useState(data.extraFee)
  const [rentalPrice] = useState(data.rentalPrice)
  const [monthlyPrice] = useState(data.monthlyPrice)
  const [totalPrice] = useState(data.totalPrice)
  const [firstname, setFirstname] = useState(userdata.data.firstname)
  const [surname, setSurname] = useState(userdata.data.surname)
  const [email, setEmail] = useState(userdata.data.email)
  const [confirmEmail, setConfirmEmail] = useState(userdata.data.email)
  const [phone, setPhone] = useState(userdata.data.phone)
  const [street, setStreet] = useState(userdata.data.address == null ? '' : userdata.data.address.street)
  const [city, setCity] = useState(userdata.data.address == null ? '' : userdata.data.address.city)
  const [country, setCountry] = useState(userdata.data.address == null ? 'Deutschland' : userdata.data.address.country)
  
  const inputCss =
    'w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black text-xl focus:bg-cl2 transition ease-in-out outline-none px-4 py-4'

  async function onClick() {
    const body = {
      userid: cookies.userid,
      firstname: firstname,
      surname: surname,
      email: email,
      street: street,
      city: city,
      country: country,
      phone: phone,
    }
    const res = await fetch(`http://localhost:3000/api/login/updateUser`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (data.message == 'Successful') {
      router.push('/payment/step3')
    }
  }

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
            fill="#5F7161"
            strokeWidth={2}
          ></circle>
          <text
            x="35%"
            y="35%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#EFEAD8"
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
          <a className="text-3xl lg:text-2xl font-bold px-6 py-4 lg:col-span-2">
            Kontaktdaten
          </a>
          <div className="px-6 pb-4 w-full">
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">Vorname:</div>
            <input
              className={inputCss}
              defaultValue={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">Name:</div>
            <input
              className={inputCss}
              defaultValue={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">
              E-Mail Adresse:
            </div>
            <input
              className={inputCss}
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">
              E-Mail Adresse bestätigen:
            </div>
            <input
              className={inputCss}
              defaultValue={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>
          <div className="px-6 pb-4 w-full">
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">
              Telefonnummer:
            </div>
            <input
              className={inputCss}
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">
              Strasse+Hausnummer:
            </div>
            <input
              className={inputCss}
              defaultValue={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">PLZ+Ort:</div>
            <input
              className={inputCss}
              defaultValue={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">Land:</div>
            <input
              className={inputCss}
              defaultValue={country}
              onChange={(e) => setCountry(e.target.value)}
            />
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
  var user_data = ''
  await fetch(
    'http://localhost:3000/api/rental/getCart?cartid=' + cookies.cartid
  )
    .then((res) => res.json())
    .then((data) => {
      res_data = data
    })
  await fetch(`http://localhost:3000/api/login/checkUser/${cookies.userid}`)
    .then((res) => res.json())
    .then((data) => {
      user_data = data
    })
  return {
    props: {
      res_data: JSON.stringify(res_data),
      user_data: JSON.stringify(user_data),
    },
  }
}
