import Image from 'next/image'
import { useRouter } from 'next/router'

function Cartitem(props) {
  const router = useRouter()
  const rental = props.children
  const model = props.children.instrumentObject.model
  async function onClick() {
    const res = await fetch(
      `http://localhost:3000/api/rental/deleteRental?rentalid=${rental.id}`
    )
    const data = await res.json()
    if (data.message == 'Successful') {
      router.reload(window.location.pathname)
    }
  }
  return (
    <li className="px-4 py-4">
      <div className="flex flex-col w-[260px] h-[320px] xl:w-[295px] sm:h-[300px] bg-cl2 drop-shadow-lg rounded-xl overflow-hidden">
        <div className="h-32 w-full overflow-hidden relative">
          <Image
            src="/detailViolin.png"
            alt="Leider gibt es zu diesem Instrument kein Bild"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <button
          className={
            props.referal == 'finish'
              ? 'hidden'
              : 'absolute px-2 py-1 z-10 text-cl2 inline-block font-black bg-cl3 rounded-tl-xl rounded-br-xl'
          }
          onClick={onClick}
        >
          x
        </button>
        <div className="h-max p-2 flex-grow flex flex-col justify-between">
          <div className="font-gabriela w-full flex-grow grid grid-cols-1 place-items-center text-center">
            <div>{model.name}</div>
          </div>
          <div className="w-full border-t-[1px] border-solid border-t-black">
            <div className="text-sm font-light w-full">
              Mindestmietdauer:{' '}
              <a className="text-cl5">{rental.duration} Monat</a>
            </div>
            <div className="text-sm font-light w-full">
              Lieferzeit: max. <a className="text-cl5">2 Werktage</a>
            </div>
          </div>
        </div>
        <div className="bg-cl3 grid grid-cols-1 place-items-center py-2">
          <a className="text-cl2">Preis</a>
          <a className="text-cl1">{rental.price}.00€</a>
        </div>
      </div>
    </li>
  )
}

export default Cartitem
