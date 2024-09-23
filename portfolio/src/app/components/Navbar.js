"use client"; // Ajoute ceci en haut du fichier

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importation d'icônes pour le menu burger

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="bg-slate-600 p-4 flex justify-between items-center md:justify-around">
            <p className='text-white font-bold text-xl'>AND.<span className='text-blue-400'>DEV</span></p>
            
            {/* Menu burger pour les petits écrans */}
            <div className="md:hidden" onClick={toggleNav}>
                {navOpen ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />}
            </div>
            
            {/* Menu large écran */}
            <ul className={`flex-col  md:flex-row absolute md:static bg-slate-600 w-full md:w-auto transition-all duration-500 ease-in ${navOpen ? 'top-16 left-0 flex z-50' : 'hidden'} md:flex justify-center text-md items-center md:space-x-8`}>
                <li className="w-full text-center md:w-auto">
                    <Link href="/" className="text-white hover:bg-blue-400 w-full md:w-auto block rounded-[10px]  py-2 px-2 lg:px-10 transition duration-500">
                        Home
                    </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                    <Link href="/about" className="text-white hover:bg-blue-400 w-full md:w-auto block rounded-[10px]  py-2 px-2 lg:px-10 transition duration-500">
                        About
                    </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                    <Link href="/projects" className="text-white hover:bg-blue-400 w-full md:w-auto block rounded-[10px]  py-2 px-2 lg:px-10 transition duration-500">
                        Projets
                    </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                    <Link href="/contact" className="text-white hover:bg-blue-400 w-full md:w-auto block rounded-[10px]  py-2 px-2 lg:px-10 transition duration-500">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Bouton Let's Talk pour grands écrans */}
            <div className='hidden md:block bg-gradient-to-tr from-sky-500 to-black  py-2 rounded-full px-2 lg:px-5 font-bold text-white hover:bg-gradient-to-bl hover:from-sky-500 hover:to-black border hover:scale-[1.1] transition duration-700'>
                <a href='/contact'>Let's talk</a>
            </div>
        </nav>
    );
}
