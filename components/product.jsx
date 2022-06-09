import Image from 'next/image'
import Link from 'next/link'

function Product(props) {
  return (
    <li className="text-2xl py-6 w-max h-max">
      <div className="bg-cl1 rounded-2xl relative overflow-hidden xl:w-[370px] w-[300px] drop-shadow-2xl">
        <div className="z-10 absolute bg-cl3 right-0 text-center font-gabriela text-cl1 xl:w-32 xl:h-32 w-24 h-24 grid grid-cols-1 place-content-center rounded-b-2xl">
          <a className="text-base">ab</a>
          <a className="xl:text-4xl text-3xl">{props.children.price}€</a>
          <a className="text-base">im Monat</a>
        </div>
        <div className="bg-cl2 xl:h-[370px] h-[300px] py-10 w-full grid grid-cols-1 rounded-xl place-content-center overflow-hidden">
          <Image
            src="/instruments/violin1.png"
            alt="Leider gibt es zu diesem Instrument kein Bild"
            width={4000}
            height={4000}
            className="rounded-xl"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="flex xl:px-8 px-4 py-5 text-center font-gabriela">
          <a className="w-1/2 text-cl2">{props.children.name}</a>
          <div className="w-1/2 flex justify-end items-center">
            <Link href={`/details/${props.children.id}`}>
              <button className="w-32 text-base text-cl1 bg-cl3 py-1 h-max rounded-3xl">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}
export default Product
