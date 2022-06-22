import Image from 'next/image'
import Link from 'next/link'

function Rental() {
  return (
    <li className="text-2xl py-6 w-max h-max">
      <div className="bg-cl1 rounded-2xl relative overflow-hidden xl:w-[370px] w-[335px] drop-shadow-2xl">
        <div className='grid grid-cols-2'>
            <div id="Picture" className=' bg-cl2 rounded-2xl mr-7'>
                <Image
                    src="/instruments/id1.png"
                    alt="Leider gibt es zu diesem Instrument kein Bild"
                    width={3000}
                    height={3000}
                    className="rounded-xl"
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
            <div id="NameUndAbschied" className='grid grid-rows-2'>
                <div id="Abschied" className=' bg-cl3 grid grid-cols-3 h-3/5 rounded-r-2xl rounded-bl-2xl text-center px-2 items-center'>
                    <div className='font-gabriela text-xs text-cl1'>Abschied schon in</div>
                    <div className='font-gabriela text-md text-cl1 pl-3'>30</div>
                    <div className='font-gabriela text-xs text-cl1'><span className='align-middle'>Tagen</span></div>
                </div>
                <div id="Name" className='font-gabriela text-cl4 text-lg text-center'>
                    Violini Stradivari
                </div>
            </div>
            <div className='grid grid-rows-3 gap-y-2 text-cl4 font-gabriela text-sm m-4 mt-7'>
                <div>Ausgeliehen am:</div>
                <div>Abgabe am:</div>
                <div>Be-Gentle-Punkte</div>
            </div>
            <div className='grid grid-rows-3 gap-y-2 text-cl4 font-gabriela text-sm m-3 mt-7'>
                <div>12.01.2022</div>
                <div>31.05.2022</div>
                <div>335</div>
            </div>
        </div>
        <div className='m-3'>
            <Link href="google.com">
                <button className=' text-base font-bold w-full text-cl1 bg-cl2 py-1 rounded-3xl'>Instrument zurückgeben</button>
            </Link>
        </div>
        
      </div>
    </li>
  )
}
export default Rental
