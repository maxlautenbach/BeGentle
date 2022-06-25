import Header from '../components/header'
import Footer from '../components/footer'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import Rental from '../components/rental'
import ReactStars from 'react-stars'

export default function Userdashboard() {
  const [cookies, setCookie] = useCookies(['cookies'])
  const [listItems, setListItmes] = useState('')
  const [dashboardData, setDashboardData] = useState('')
  useEffect(() => {
    fetch(`http://localhost:3000/api/userDashboard?userid=${cookies.userid}`)
      .then((res) => res.json())
      .then((data) => {
        setListItmes(
          data.data.map((rental) => <Rental key={rental.id}>{rental}</Rental>)
        ),
        setDashboardData(data)
      }
      )
      
  }, [])
  
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  return (
    <div>
      <div className="w-screen h-screen bg-cl4 flex flex-col">
        <Header />
        <div className="flex-grow grid grid-cols-1 place-items-center">
          <div className="w-screen sm:w-11/12 lg:w-5/6 max-w-7xl h-full sm:h-5/6 sm:rounded-xl overflow-hidden">
            <div id="overview" className="ml-7 my-5 mr-3">
              <p className="font-gabriela text-cl1 text-xl">Hallo {dashboardData.userName}!</p>
              <p className="text-sm font-light">
                Hier findest du alles über deine ausgeliehenen Schätze!
              </p>
              <div className="gap-4 grid grid-cols-3 overflow-scroll w-max my-5 drop-shadow-md">
                <div className="bg-cl2 rounded-2xl w-36 h-28 p-2">
                  <p className="text-xs font-semibold">Deine Instrumente</p>
                  <div className="grid grid-cols-1 h-4/5 content-center">
                    <span className="align-middle font-gabriela text-4xl text-center text-cl1">
                      {dashboardData.numberRentals}
                    </span>
                  </div>
                </div>
                <div className="bg-cl2 rounded-2xl w-36 h-28 p-2">
                  <p className="text-xs font-semibold">Be-Gentle-Punkte</p>
                  <div className="grid grid-cols-1 h-4/5 content-center">
                    <span className="align-middle font-gabriela text-4xl text-center text-cl1">
                      {dashboardData.sumPoints}
                    </span>
                  </div>
                </div>
                <div className="bg-cl2 rounded-2xl w-36 h-28 p-2">
                  <p className="text-xs font-semibold">Nächster Abschied</p>
                  <div className="grid grid-cols-1 h-4/5 content-center">
                    <p className="font-gabriela text-lg text-center text-cl1">
                      {dashboardData.nextReturn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="MyInstruments" className={'mx-7 my-5'}>
              <ul>{listItems}</ul>
            </div>
            <ReactStars count={5} size={24} color2={'#ffd700'} onChange={ratingChanged}/>
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
