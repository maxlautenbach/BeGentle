import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react'
import Rental from '../components/rental'

export default function Userdashboard({ data, rentals }) {
  const [rental] = useState(
    rentals.map((rental) => <Rental key={rental.id}>{rental}</Rental>)
  )

  return (
    <div>
      <div className="w-screen min-h-screen bg-cl4 flex flex-col">
        <Header />
        <div className="flex-grow grid grid-cols-1 place-items-center">
          <div className="w-screen sm:w-11/12 lg:w-5/6 max-w-7xl h-full sm:rounded-xl ">
            <div id="overview" className="ml-7 my-5 mr-3">
              <p className="font-gabriela text-cl1 text-xl md:text-3xl md:mb-2">
                Hallo {data.userName}!
              </p>
              <p className="text-sm font-light md:text-xl">
                Hier findest du alles über deine ausgeliehenen Schätze!
              </p>
              <div className="w-full flex flex-row md:justify-center my-5 drop-shadow-md overflow-auto ">
                <div className="bg-cl2 rounded-2xl min-w-[180px] h-28 p-2 mr-5 md:w-3/12 md:h-36 md:mr-8">
                  <p className="text-xs font-semibold md:text-lg">
                    Deine Instrumente
                  </p>
                  <div className="grid grid-cols-1 h-4/5 content-center">
                    <span className="align-middle font-gabriela text-4xl text-center text-cl1 md:text-6xl">
                      {data.numberRentals}
                    </span>
                  </div>
                </div>
                <div className="bg-cl2 rounded-2xl min-w-[180px] h-28 p-2 mr-5 md:w-3/12 md:h-36 md:mr-8">
                  <p className="text-xs font-semibold md:text-lg">
                    Be-Gentle-Punkte
                  </p>
                  <div className="grid grid-cols-1 h-4/5 content-center">
                    <span className="align-middle font-gabriela text-4xl text-center text-cl1 md:text-6xl">
                      {data.sumPoints}
                    </span>
                  </div>
                </div>
                <div className="bg-cl2 rounded-2xl min-w-[180px] h-28 p-2 md:w-3/12 md:h-36">
                  <p className="text-xs font-semibold md:text-lg">
                    Nächster Abschied
                  </p>
                  <div className="grid grid-cols-1 h-4/5 content-center">
                    <p className="font-gabriela text-lg text-center text-cl1 md:text-3xl ">
                      {data.nextReturn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="MyInstruments" className={'mx-7 my-5'}>
              <ul className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                {rental}
              </ul>
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
    </div>
  )
}

export async function getServerSideProps(context) {
  const cookies = context.req.cookies
  var rental = ''
  var res_data = ''
  await fetch(
    `http://localhost:3000/api/userDashboard?userid=${cookies.userid}`
  )
    .then((res) => res.json())
    .then((data) => {
      res_data = data
      rental = data.data
    })
  return {
    props: {
      data: res_data,
      rentals: rental,
    },
  }
}
