import Header from '../components/header'
import Footer from '../components/footer'
import Cartitem from '../components/cartitem'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import Router from 'next/router'

export default function Shoppingcart({ data, res_rentals }) {
  data = JSON.parse(data)
  const [rentals] = useState(res_rentals.map((item) => <Cartitem key={item.id}>{item}</Cartitem>))
  const [cookies] = useCookies(['cookies'])
  async function onClick() {
    const res = await fetch(
      `http://localhost:3000/api/login/checkUser/${cookies.userid}`
    )
    const data = await res.json()
    if (data.status == 'ACTIVE') {
      Router.push('http://localhost:3000/payment/step1')
    } else {
      Router.push('http://localhost:3000/login')
    }
  }
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
                    <a className="text-sm">{data.rentalPrice}.00€</a>
                    <a className="font-light text-sm">Versand:</a>
                    <a className="text-sm">{data.shippingFee}€</a>
                    <div className="col-span-2 border-b-[1px] border-solid border-b-cl2 w-full pt-1"></div>
                    <a className="text-sm pt-1">Heute zu zahlen:</a>
                    <a className="text-cl5 text-sm">{data.totalPrice}€</a>
                    <a className="text-sm">Monatliche Rate:</a>
                    <a className="text-cl5 text-sm">{data.rentalPrice}.00€</a>
                  </div>
                  <div className="col-span-2 bg-cl2 font-gabriela w-full rounded-lg h-8">
                    <button
                      className="text-black text-center w-full h-full"
                      onClick={onClick}
                    >
                      Jetzt Mieten!
                    </button>
                  </div>
                  <div className="pt-4" />
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

export async function getServerSideProps(context){
  const cookies = context.req.cookies;
  var res_data = ""
  var rentals = ""
  await fetch(`http://localhost:3000/api/rental/getCart?cartid=${parseInt(cookies.cartid)}`)
      .then((res) => res.json())
      .then((data) => {
        res_data = data
        rentals = data.rentals
      })
  return {
    props: {
      data: JSON.stringify(res_data),
      res_rentals: rentals
    },
  };
}
