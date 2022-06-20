import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Step2() {
  const router = useRouter()
  const [cookies] = useCookies(['cookies'])
  const cartid = cookies.cartid
  const [shippingFee, setShippingFee] = useState(0)
  const [extraFee, setExtraFee] = useState(0)
  const [rentalPrice, setRentalPrice] = useState(0)
  const [monthlyPrice, setMonthlyPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cardnumber, setCardnumber] = useState('')
  const [cardowner, setCardowner] = useState('')
  const [carddate, setCarddate] = useState('')
  const [ccv, setCCV] = useState('')
  const [paymentVariant, setPaymentVariant] = useState(1)
  const activeButton =
    'border-solid border-[1px] border-cl1 h-24 w-24 rounded-xl grid grid-cols-1 place-items-center overflow-hidden text-cl2 bg-cl1'
  const passiveButton =
    'border-solid border-[1px] border-cl1 h-24 w-24 rounded-xl grid grid-cols-1 place-items-center overflow-hidden text-cl1'
  const inputCss =
    'w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black text-xl focus:bg-cl2 transition ease-in-out outline-none px-4 py-4'
  useEffect(() => {
    fetch('/api/rental/getCart?cartid=' + cartid)
      .then((res) => res.json())
      .then((data) => {
        setRentalPrice(data.rentalPrice)
        setExtraFee(data.extraFee)
        setShippingFee(data.shippingFee)
        setMonthlyPrice(data.monthlyPrice)
        setTotalPrice(data.totalPrice)
      })
  }, [])

  async function onClick() {
    const body = {
      userid: cookies.userid,
      variant: paymentVariant,
      cardowner: cardowner,
      cardnumber: cardnumber,
      carddate: carddate,
      ccv: ccv,
    }
    console.log('body')
    const res = await fetch(
      `http://localhost:3000/api/updatePaymentInformation`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
      }
    )
    const data = await res.json()

    if (data.message == 'Successful') {
      const orderBody = {
        cartid: parseInt(cookies.cartid),
        userid: parseInt(cookies.userid),
      }
      const res = await fetch(`http://localhost:3000/api/rental/issueOrder`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(orderBody),
      })
      const orderData = await res.json()
      if (orderData.message == 'Successful') {
        router.push(`/payment/step4?id=${orderData.id}`)
      }
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
        <div className="bg-cl4 grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden max-w-5xl">
          <div className="px-6 py-4 w-full">
            <a className="text-3xl lg:text-2xl font-bold">Zahlart</a>
            <div className="grid grid-cols-1 place-items-center h-80">
              <div className="grid grid-cols-3 place-items-center">
                <div className="px-2 py-4">
                  <button
                    className={
                      paymentVariant == 1 ? activeButton : passiveButton
                    }
                    onClick={() => setPaymentVariant(1)}
                  >
                    <span />
                    <div className="h-full w-full py-3 overflow-hidden relative">
                      <Image
                        src="/icons/payment/Mastercard_2019_logo.svg"
                        alt="Leider gibt es zu diesem Instrument kein Bild"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <a className="font-light text-sm ">Mastercard</a>
                  </button>
                </div>

                <button
                  className={paymentVariant == 2 ? activeButton : passiveButton}
                  onClick={() => setPaymentVariant(2)}
                >
                  <span />
                  <div className="h-full w-full py-3 overflow-hidden relative">
                    <Image
                      src="/icons/payment/visa.png"
                      alt="Leider gibt es zu diesem Instrument kein Bild"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <a className="font-light text-sm">Visa</a>
                </button>
                <button
                  className={paymentVariant == 3 ? activeButton : passiveButton}
                  onClick={() => setPaymentVariant(3)}
                >
                  <span />
                  <div className="h-full w-full py-3 overflow-hidden relative">
                    <Image
                      src="/icons/payment/american-express.png"
                      alt="Leider gibt es zu diesem Instrument kein Bild"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <a className="font-light text-sm">American Express</a>
                </button>
                <button
                  className={paymentVariant == 4 ? activeButton : passiveButton}
                  onClick={() => setPaymentVariant(4)}
                >
                  <span />
                  <div className="h-full w-full py-3 overflow-hidden relative">
                    <Image
                      src="/icons/payment/paypal.png"
                      alt="Leider gibt es zu diesem Instrument kein Bild"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <a className="font-light text-sm">PayPal</a>
                </button>
                <button
                  className={paymentVariant == 5 ? activeButton : passiveButton}
                  onClick={() => setPaymentVariant(5)}
                >
                  <span />
                  <div className="h-full w-full py-3 overflow-hidden relative">
                    <Image
                      src="/icons/payment/apple-pay.png"
                      alt="Leider gibt es zu diesem Instrument kein Bild"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <a className="font-light text-sm">Apple Pay</a>
                </button>
                <button
                  className={paymentVariant == 6 ? activeButton : passiveButton}
                  onClick={() => setPaymentVariant(6)}
                >
                  <span />
                  <div className="h-full w-full py-3 overflow-hidden relative">
                    <Image
                      src="/icons/payment/google-pay.png"
                      alt="Leider gibt es zu diesem Instrument kein Bild"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <a className="font-light text-sm">Google Pay</a>
                </button>
              </div>
            </div>
          </div>
          <div
            className={paymentVariant > 3 ? 'hidden' : 'px-6 py-4 w-full h-80'}
          >
            <a className="text-3xl lg:text-2xl font-bold">Zahldaten</a>
            <div className="h-full grid grid-cols-1 place-items-center">
              <div className="pl-4 pt-4 pb-1 text-cl1 font-light w-full">
                Kreditkartennummer:
              </div>
              <input
                className={inputCss}
                defaultValue={cardnumber}
                onChange={(e) => setCardnumber(e.target.value)}
              />
              <div className="pl-4 pt-4 pb-1 text-cl1 font-light w-full">
                Inhaber:
              </div>
              <input
                className={inputCss}
                defaultValue={cardowner}
                onChange={(e) => setCardowner(e.target.value)}
              />
              <div className="grid grid-cols-2 place-items-center">
                <div className="pl-4 pt-4 pb-1 w-full text-cl1 font-light">
                  Ablaufdatum:
                </div>
                <div className="pl-4 pt-4 pb-1 w-full text-cl1 font-light">
                  CCV:
                </div>
                <div className="w-full pr-2">
                  <input
                    className="w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black text-xl focus:bg-cl2 transition ease-in-out outline-none px-4 py-4"
                    defaultValue={carddate}
                    onChange={(e) => setCarddate(e.target.value)}
                  />
                </div>
                <div className="w-full pl-2">
                  <input
                    className="w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black text-xl focus:bg-cl2 transition ease-in-out outline-none px-4 py-4"
                    defaultValue={ccv}
                    onChange={(e) => setCCV(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              paymentVariant > 3 ? 'px-6 py-4 w-full h-full' : 'hidden'
            }
          >
            <a className="text-3xl lg:text-2xl font-bold">Zahldaten</a>
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
            <button
              className="w-full bg-cl2 p-2 rounded-xl text-lg font-gabriela"
              onClick={onClick}
            >
              {paymentVariant <= 3
                ? 'Weiter zur Sicherheitsprüfung'
                : 'Weiter zum Zahlungsdienstleister'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
