import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import Router from 'next/router'
import Link from 'next/link'

export default function Login({ referer }) {
  const [id, setId] = useState()
  const [password, setPassword] = useState()
  const [cookies, setCookie] = useCookies(['cookies'])


  async function auth() {
    if (referer.includes('shoppingcart')) {

      const body = {
        id: id,
        password: password,
        tempcartid: cookies.cartid,
      }
      const res = await fetch(`http://localhost:3000/api/login/auth`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
      })
      const data = await res.json()
      alert(data.message)
      if (res.status == 200) {
        setCookie('userid', data.userid)
        setCookie('cartid', data.cartid)
        alert('Redirect')
        Router.push('http://localhost:3000/payment/step1')
      }
    } else {
      const body = {
        id: id,
        password: password,
      }
      const res = await fetch(`http://localhost:3000/api/login/auth`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
      })
      const data = await res.json()
      alert(data.message)
      if (res.status == 200) {
        setCookie('userid', data.userid)
        alert('Redirect')
        Router.push('http://localhost:3000/userdashboard')
      }
    }
    else {
      const body = {
        id: id,
        password: password,
      }
      const res = await fetch(`http://localhost:3000/api/login/auth`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
      })
      const data = await res.json()
      alert(data.message)
      if (res.status == 200) {
        setCookie('userid', data.userid)
        alert('Redirect')
        Router.push('http://localhost:3000/userdashboard')
      }
    }
  }

  return (
    <div>
      <div className="w-screen h-screen bg-cl2 flex flex-col">
        <Header />
        <div className="flex-grow grid grid-cols-1 place-items-center">
          <div className="w-screen sm:w-11/12 lg:w-5/6 max-w-7xl h-full sm:h-5/6 sm:rounded-xl flex overflow-hidden">
            <div className="bg-cl6 w-full" id="login">
              <div className="px-8 py-8 h-full text-cl4 grid grid-cols-1 place-items-center">
                <div className="w-full">
                  <div className="font-gabriela text-3xl text-center w-full">
                    BeGentle! Kundenlogin
                  </div>
                  <div className="pl-4 pt-4 pb-1 font-light">
                    E-Mail/Kundennummer:
                  </div>
                  <input
                    className="w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black px-4 text-xl focus:bg-cl2 transition ease-in-out outline-none"
                    type="text"
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                  <div className="pl-4 pt-2 pb-1 font-light">Passwort:</div>
                  <input
                    className="w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black px-4 text-2xl focus:bg-cl2 transition ease-in-out outline-none"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <div className="py-4" />
                  <button
                    className="w-full h-12 text-cl4 bg-cl1 rounded-xl font-light text-xl"
                    onClick={auth}
                  >
                    Einloggen
                  </button>
                  <div className="py-2 border-b-2 border-solid border-cl2" />
                  <div className="py-2" />
                  <Link
                    href={`http://localhost:3000/register?referer=${referer}`}
                  >
                    <button className="w-full h-12 text-cl4 bg-cl1 rounded-xl font-light text-xl">
                      Registrieren
                    </button>
                  </Link>
                  <div className="py-2" />

                  <Link href="http://localhost:3000/payment/step1">
                    <button
                      className={
                        referer.includes('shoppingcart')
                          ? 'w-full h-12 text-cl1 border-solid border-2 border-cl1 rounded-xl font-light text-xl'
                          : 'hidden'
                      }
                    >
                      Als Gast Bestellen
                    </button>
                  </Link>

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

export async function getServerSideProps(context) {
  var referer =
    typeof context.req.headers.referer === 'undefined'
      ? 'login'
      : context.req.headers.referer
  if (referer.includes('shoppingcart')) {
    referer = 'shoppingcart'
  } else {
    referer = 'login'
  }
  return {
    props: { referer },
  }
}
