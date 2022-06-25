import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

export default function Register({ referer }) {
  const router = useRouter()
  const [cookies] = useCookies(['cookies'])
  const [firstname, setFirstname] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [confirmEmail, setConfirmEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPasswort, setConfirmPassword] = useState()
  const [phone, setPhone] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState('Deutschland')
  const inputCss =
    'w-full h-12 rounded-xl bg-cl4 drop-shadow-xl text-black text-xl focus:bg-cl2 transition ease-in-out outline-none px-4 py-4'

  async function onClick() {
    const body = {
      userid: cookies.userid,
      firstname: firstname,
      surname: surname,
      email: email,
      address: {
        street: street,
        city: city,
        country: country,
      },
      phone: phone,
      password: password,
    }
    const res = await fetch(`http://localhost:3000/api/login/register`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (data.message == 'Successful' && referer == 'shoppingcart') {
      router.push('/payment/step1')
    } else if (data.message == 'Successful' && referer == 'login') {
      router.push('/')
    }
  }

  return (
    <div className="bg-cl2 px-8 py-4 flex flex-col w-screen min-h-screen">
      <div className="text-cl1 font-gabriela text-4xl py-6 w-full grid grid-cols-1 place-items-center">
        Registrierung
      </div>
      <div className="flex flex-row justify-center">
        <div className="bg-cl4 grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden h-max w-full max-w-5xl">
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
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">Passwort:</div>
            <input
              className={inputCss}
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <div className="pl-4 pt-4 pb-1 text-cl1 font-light">
              Passwort bestätigen:
            </div>
            <input
              className={inputCss}
              defaultValue={confirmPasswort}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="px-6 pb-4 w-full h-full flex flex-col justify-center">
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
  const referer =
    typeof context.query.referer === 'undefined' ? '' : context.query.referer
  return {
    props: { referer },
  }
}
