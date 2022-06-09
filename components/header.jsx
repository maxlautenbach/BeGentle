import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return(
        <div className='sticky z-10 top-0 px-4 sm:px-6 py-3 bg-cl1 text-cl2 w-screen font-gabriela grid grid-cols-1 place-items-center'>
            <div className='w-11/12 lg:w-5/6 grid grid-cols-2'>
                <div className='flex text-2xl lg:text-3xl h-12 w-full items-center justify-start'>
                    Be Gentle!
                </div>
                <div className='hidden lg:flex text-right font-normal w-full h-full text-base items-center justify-end '>
                    <div className='transition ease-in-out border-b border-cl1 hover:border-cl3 hover:text-cl3'>
                        <Link href="/">Home</Link>
                    </div>
                    <div className='pr-8'/>
                </div>
                <section className="MOBILE-MENU flex justify-end items-center lg:hidden">
                    <div
                        className={isNavOpen ? "hidden" : "HAMBURGER-ICON space-y-2"}
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-cl2"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-cl2"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-cl2"></span>
                    </div>
                    <div className={isNavOpen ? "" : "hidden"}>
                        <div
                            className="CROSS-ICON"
                            onClick={() => setIsNavOpen(false)}
                            >
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
                <div className={isNavOpen ? "col-span-2" : "hidden"}>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center">
                        <li className="border-b border-gray-400 my-4">
                            <Link href="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
    )}

export default Header;