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
    <div>
      <div className="w-screen h-screen bg-cl2 flex flex-col">
        <Header />
        <div className="flex-grow grid grid-cols-1 place-items-center">
          <div className="w-screen sm:w-11/12 lg:w-5/6 max-w-7xl h-full sm:h-5/6 sm:rounded-xl flex overflow-hidden">
            <div className="bg-cl4 w-full" id="cartoverview">
              <div className="flex flex-col h-full">
                <div className="px-8 py-8 font-gabriela text-3xl border-solid border-b-[1px] border-b-black pb-4">
                  Deine überaus sehr gute Wahl
                </div>
                <ul className="w-full flex flex-col sm:flex-row place-items-center flex-grow h-32 sm:overflow-x-scroll overflow-y-scroll 2xl:px-4">
                  {rentals}
                </ul>
                <div className="px-8 py-2 bg-cl1 2xl:bg-none flex flex-col justify-end text-cl2">
                  <div className="grid grid-cols-2 place-items-end w-full pb-4">
                    <a className="pt-1 font-light text-sm">Produkte:</a>
                    <a className='text-sm'>{data.totalPrice}€</a>
                    <a className='font-light text-sm'>Versand:</a>
                    <a className='text-sm'>{data.shippingFee}€</a>
                    <div className="col-span-2 border-b-[1px] border-solid border-b-cl2 w-full pt-1"></div>
                    <a className='text-sm pt-1'>Heute zu zahlen:</a>
                    <a className="text-cl5 text-sm">{data.totalPrice}€</a>
                    <a className='text-sm'>Monatliche Rate:</a>
                    <a className="text-cl5 text-sm">{data.rentalPrice}.00€</a>
                    
                  </div>
                  <div className='col-span-2 bg-cl2 font-gabriela w-full rounded-lg h-8'>
                        <button className='text-black text-center w-full h-full'>Jetzt Mieten!</button>
                    </div>
                    <div className='pt-4'/>
                </div>
              </div>
            </div>
            <div className="bg-cl6 2xl:w-4/12 hidden" id="login">
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
        <div className="hidden sm:flex">
          <Footer />
        </div>
      </div>
      <div className="sm:hidden bg-cl1 border-t-2 border-solid border-t-cl2">
        <Footer />
      </div>
    </div>
  )
}
