import Header from '../components/header'
import Footer from '../components/footer'
import Cartitem from '../components/cartitem'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'

export default function Shoppingcart() {
  const [cookies] = useCookies(['cookies'])
  const cartid = cookies.cartid
  const [data, setData] = useState({ id: 1 })
  const [rentals, setRentals] = useState(<li></li>)
  useEffect(() => {
    fetch('/api/rental/getCart?cartid=' + cartid)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setRentals(
          data.rentals.map((item) => <Cartitem key={item.id}>{item}</Cartitem>)
        )
      })
  }, [])
  return (
    <div className="w-screen h-screen bg-cl2 flex flex-col">
      <Header />
      <div className="flex-grow grid grid-cols-1 place-items-center">
        <div className="w-11/12 lg:w-5/6 max-w-7xl h-3/5 rounded-xl flex overflow-hidden">
          <div className="bg-cl4 w-9/12">
            <div className="px-8 py-8">
              <div className="font-gabriela text-3xl">
                Deine überaus sehr gute Wahl
              </div>
              <ul>{rentals}</ul>
            </div>
          </div>
          <div className="bg-cl6 w-4/12">
            <div className="px-8 py-8 h-full text-cl4 grid grid-cols-1 place-items-center">
              <div className="w-full">
                <div className="font-gabriela text-3xl text-center w-full">
                  Registrierter Kunde
                </div>
                <div className="pl-4 pt-4 pb-1 font-light">
                  E-Mail/Kundennummer:
                </div>
                <input
                  className="w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black px-4 text-xl focus:bg-cl2 transition ease-in-out outline-none"
                  type="text"
                ></input>
                <div className="pl-4 pt-2 pb-1 font-light">Passwort:</div>
                <input
                  className="w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black px-4 text-2xl focus:bg-cl2 transition ease-in-out outline-none"
                  type="password"
                ></input>
                <div className="py-4" />
                <button className="w-full h-12 text-cl4 bg-cl1 rounded-xl font-light text-xl">
                  Einloggen
                </button>
                <div className="py-2 border-b-2 border-solid border-cl2" />
                <div className="py-2" />
                <button className="w-full h-12 text-cl4 bg-cl1 rounded-xl font-light text-xl">
                  Registrieren
                </button>
                <div className="py-2" />
                <button className="w-full h-12 text-cl1 border-solid border-2 border-cl1 rounded-xl font-light text-xl">
                  Als Gast Bestellen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
