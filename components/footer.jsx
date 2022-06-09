import Link from 'next/link'


function Footer() {
    let css = "transition ease-in-out border-b border-cl2 hover:border-cl3 hover:text-cl3 font-gabriela"
    return(
        <div className='sticky z-10 top-0 px-4 py-3 bg-cl1 text-cl2 w-screen flex justify-center rounded-t-xl'>
            <div className='hidden sm:flex text-center font-normal w-full h-full text-base items-center justify-center'>
            <div className={css}><Link href="/kontakt">Kontakt</Link></div>
            <div className='px-6'/>
            <div className={css}><Link href="/gesetzliches/datenschutz">Datenschutz</Link></div>
            <div className='px-6'/>
            <div className={css}><Link href="/gesetzliches/impressum">Impressum</Link></div>
            </div>
            <div className="sm:hidden">
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center">
                <li className="border-b border-gray-400 my-4">
                    <a href="/contact">Kontakt</a>
                </li>
                <li className="border-b border-gray-400 my-4">
                    <a href="/gesetzliches/datenschutz">Datenschutz</a>
                </li>
                <li className="border-b border-gray-400 my-4">
                    <a href="/gesetzliches/impressum">Impressum</a>
                </li>
                </ul>
            </div>
        </div>
    )    
}

export default Footer