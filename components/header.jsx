import Link from 'next/link'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useSSE } from 'use-sse'
import { useRouter } from 'next/router'

async function createTempUser() {
  const res = await fetch(`http://localhost:3000/api/login/createUser`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      status: 'TEMP',
    }),
  })
  const data = await res.json()
  return data
}

async function checkUserID(cookies) {
  var userid = ''
  var cartid = ''
  if (typeof cookies.userid == 'undefined') {
    const userdata = await createTempUser()
    userid = userdata.userid
    cartid = userdata.cartid
  } else {
    const res = await fetch(
      `http://localhost:3000/api/login/checkUser/${cookies.userid}`
    )
    const data = await res.json()

    if (data.message != 'Successful') {
      const userdata = await createTempUser()
      userid = userdata.userid
      cartid = userdata.cartid
    } else {
      userid = data.data.id
      cartid = data.data.shoppingCarts[0].id
    }
  }
  return {
    userid: userid,
    cartid: cartid,
  }
}

function Header() {
  const Router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['cookies'])
  useSSE(() => {
    return checkUserID(cookies).then((res) => {
      setCookie('userid', res.userid)
      setCookie('cartid', res.cartid)
    })
  }, [])

  async function onClick() {
    const res = await fetch(
      `http://localhost:3000/api/login/checkUser/${cookies.userid}`
    )
    const data = await res.json()
    if (data.status == 'ACTIVE') {
      Router.push('http://localhost:3000/userdashboard')
    } else {
      Router.push('http://localhost:3000/login')
    }
  }

  return (
    <div className="sticky z-10 top-0 px-4 sm:px-6 py-3 bg-cl1 text-cl2 w-screen font-gabriela grid grid-cols-1 place-items-center drop-shadow-xl">
      <div className="w-11/12 lg:w-5/6 max-w-7xl grid grid-cols-2">
        <div className="flex text-2xl lg:text-3xl h-12 w-full items-center justify-start">
          Be Gentle!
        </div>
        <div className="hidden lg:flex text-right font-normal w-full h-full text-base items-center justify-end ">
          <div className="transition ease-in-out border-b border-cl1 hover:border-cl3 hover:text-cl3">
            <Link href="/">Home</Link>
          </div>
          <div className="pr-8" />
          <div className="transition ease-in-out border-b border-cl1 hover:border-cl3 hover:text-cl3">
            <Link href="/shoppingcart">Warenkorb</Link>
          </div>
          <div className="pr-8" />
          <div className="transition ease-in-out border-b border-cl1 hover:border-cl3 hover:text-cl3">
            <button onClick={onClick}>Profil</button>
          </div>
          <div className="pr-8" />
        </div>
        <section className="MOBILE-MENU flex justify-end items-center lg:hidden">
          <div
            className={isNavOpen ? 'hidden' : 'HAMBURGER-ICON space-y-2'}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-cl2"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-cl2"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-cl2"></span>
          </div>
          <div className={isNavOpen ? '' : 'hidden'}>
            <div className="CROSS-ICON" onClick={() => setIsNavOpen(false)}>
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </section>
        <div className={isNavOpen ? 'col-span-2' : 'hidden'}>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center">
            <li className="border-b border-gray-400 my-4">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b border-gray-400 my-4">
              <Link href="/shoppingcart">Warenkorb</Link>
            </li>
            <li className="border-b border-gray-400 my-4">
              <button onClick={onClick}>Profil</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
