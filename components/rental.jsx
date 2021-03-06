import Image from 'next/image'
import Link from 'next/link'
import { useCookies } from 'react-cookie'

function Rental(props) {
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(['cookies'])
  function onClickReturn() {
    setCookie('rentalid', props.children.id)
  }

  return (
    <li className="text-2xl py-6 w-max h-max">
      <div className="bg-cl1 rounded-2xl relative overflow-hidden xl:w-[450px] w-[335px] drop-shadow-2xl">
        <div className="grid grid-cols-2">
          <div id="Picture" className=" bg-cl2 rounded-2xl mr-7">
            <Image
              src={props.children.instrumentObject.model.imageURL}
              alt="Leider gibt es zu diesem Instrument kein Bild"
              width={3000}
              height={3000}
              className="rounded-xl"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div id="NameUndAbschied" className="grid grid-rows-2">
            <div
              id="Abschied"
              className=" bg-cl3 grid grid-cols-3 h-3/5 rounded-r-2xl rounded-bl-2xl text-center px-2 items-center"
            >
              <div className="font-gabriela text-xs text-cl1 xl:text-base">
                Abschied schon in
              </div>
              <div className="font-gabriela text-md text-cl1 pl-3 xl:text-2xl">
                {props.children.returnInDays}
              </div>
              <div className="font-gabriela text-xs text-cl1 xl:text-base">
                <span className="align-middle">Tagen</span>
              </div>
            </div>
            <div
              id="Name"
              className="font-gabriela text-cl4 text-base text-center xl:text-2xl px-2"
            >
              {props.children.instrumentObject.model.name}
            </div>
          </div>
          <div className="grid grid-rows-3 gap-y-2 text-cl4 font-gabriela text-sm m-4 mt-7 xl:text-xl xl:mt-10">
            <div>Ausgeliehen am:</div>
            <div>Abgabe am:</div>
            <div>Be-Gentle-Punkte</div>
          </div>
          <div className="grid grid-rows-3 gap-y-2 text-cl4 font-gabriela text-sm m-3 mt-7 xl:text-xl xl:mt-10">
            <div>{props.children.rentalStart}</div>
            <div>{props.children.rentalEnd}</div>
            <div>{props.children.points}</div>
          </div>
        </div>
        <div className="m-3 md:mt-5">
          <Link href="/return">
            <button
              onClick={onClickReturn}
              className=" text-base font-bold w-full text-cl1 bg-cl2 py-1 rounded-3xl xl:text-xl xl:py-2"
            >
              Instrument zur??ckgeben
            </button>
          </Link>
        </div>
      </div>
    </li>
  )
}
export default Rental
