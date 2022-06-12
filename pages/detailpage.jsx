import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Head from 'next/head'
import Link from 'next/link'


const detailpage = () => {
  return (
    <div>
        <Head>
            <title>BeGentle! Instrumentenverleih</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
            <div className="grid grid-cols-1 place-items-center ">
                <div className="-z-11 relative" >
                    <Image
                        src={'/detailViolin.png'}
                        alt=""
                        layout="fill"
                        className="-z-11"
                        objectFit="cover"
                        objectpostion="center"
                    />
                </div>
            </div>
        <div
            className="w-screen bg-cl4 grid grid-cols-1 gap-0 place-items-center"
            id="page-content">
                <div className="z-1 w-full bg-cl4 rounded-t-xl grid grid-cols-1  place-items-center" >
                    <div className="w-5/6 max-w-7xl font-gabriela text-2xl text-cl1 py-4">
                        Violini Stradivari
                    </div>
                    <div className="w-5/6 max-w-7xl text-sm text-cl1 py-0">
                        Scala Vilagrio R.O. Stradivari Avance Solo
                    </div>
                    <div className="w-5/6 max-w-7xl font-gabriela text-2xl text-cl5 py-1">
                        60,00€ im Monat
                    </div>
                    <div className="w-5/6 max-w-7xl text-xs text-cl1 py-1">
                        <p>BeGentle! Care inklusive.</p>
                        <p className='pt-0.5'>Spätestens in 2 Tagen bei dir.</p>
                        <p className='pt-0.5'>Deine Basis für tolle Musik.</p>

                        <p className='pt-4'>Wähle deine Mindestlaufzeit</p>
                    </div>
                    <div className='z-1 w-5/6 max-w-7xl bg-cl1 rounded-xl place-items-center border-cl1 border-2 mb-3 mt-1'>
                        <div className='grid grid-cols-4 text-center bg-cl4 text-cl1 rounded-t-xl'>
                            <div className='rounded-t-xl py-1'>
                                <p className='text-s'>1+</p>
                                <p className='text-xs font-light'>Monate</p>
                            </div>
                            <div className='rounded-t-xl py-1'>
                                <p className='text-s'>1+</p>
                                <p className='text-xs font-light'>Monate</p>
                            </div>
                            <div className='rounded-t-xl py-1'>
                                <p className='text-s'>1+</p>
                                <p className='text-xs font-light'>Monate</p>
                            </div>
                            <div className='bg-cl1 rounded-t-xl text-cl4 py-1'>
                                <p className='text-s'>1+</p>
                                <p className='text-xs font-light'>Monate</p>
                            </div>
                        </div>
                        <p className='text-cl4 text-center p-3'>Erlebe die Musik!</p>
                    </div>
                    <Link href="/moredetails">
                        <div>
                            <p className='text-cl1 font-gabriela text-lg text-center pt-3'>Mehr Details</p>
                            <div className="w-28">
                                <Image
                                    src="/icons/dropdown.png"
                                    alt="Hier klicken für mehr Informationen"
                                    width={200}
                                    height={50}
                                    layout="responsive"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        
                    </Link>
                </div>

            <Footer />
        </div>
    </div>
  )
}

export default detailpage