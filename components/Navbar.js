import React, { useState } from 'react'
import {Transition} from '@headlessui/react';
import {Link} from 'react-scroll'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <nav className='fixed z-10 w-full shadow-sm'>
            <div className='w-full'>
                <div className='flex items-center w-full h-20'>
                    <div className='flex items-center justify-between w-full mx-20 items'>
                        <div className='flex items-center justify-center flex-shrink-0'>
                            <h1 className='text-xl font-bold cursor-pointer'>
                                <span className='text-blue-500'>EvE</span>
                            </h1>
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-baseline ml-10 space-x-4'>
                                <Link 
                                    activeClass='Home'
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='px-3 py-2 font-semibold text-blue-600 cursor-pointer text-md hover:font-black'
                                >
                                    Home
                                </Link>
                                <Link 
                                    activeClass='about'
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white'
                                >
                                    About
                                </Link>
                                <Link 
                                    activeClass='work'
                                    to="work"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white'
                                >
                                    Projects
                                </Link>
                                <Link 
                                    activeClass='services'
                                    to="services"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white'
                                >
                                    Services
                                </Link>
                                <Link 
                                    activeClass='contact'
                                    to="contact"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-black'
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex mr-10 md:hidden'>
                        <button 
                            onClick={() =>setIsOpen(!isOpen)} 
                            type="button" 
                            className='inline-flex items-center p-2 text-white bg-blue-600 rounded-md outline-none hover:bg-blue-600 focus: focus:ring-offset-blue-800 focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded="false"
                         >
                            <span className="sr-only">Only main menu</span>
                            {!isOpen ? (
                                <svg 
                                    className='block w-6 h-6' 
                                    xmlns="http:www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke='currentColor'
                                    aria-hidden="true"
                                 >
                                    <path 
                                        strokeLinecap='round'
                                        stroke  strokeLinejoin='round'
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        />
                                </svg>
                            ): (
                                <svg 
                                    className='block w-6 h-6 ' 
                                    xmlns="http:www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke='currentColor'
                                    aria-hidden="true"
                                 >
                                    <path 
                                        strokeLinecap='round'
                                        stroke  strokeLinejoin='round'
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition 
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave="transition ease-in duration-75 transform"
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
             >
                {(ref) => (
                    <div className='md:hidden id=mobile-menu'>
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 bg-white sm:px-3">
                            <Link
                                href="/home"
                                activeClass='home'
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="block px-3 py-2 mx-10 text-base font-medium text-black transition-all rounded-md cursor-pointer hover:bg-blue-600 hover:mx-8 hover:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                activeClass='about'
                                to="about"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="block px-3 py-2 mx-10 text-base font-medium text-black transition-all rounded-md cursor-pointer hover:bg-blue-600 hover:mx-8 hover:text-white"
                            >
                                About
                            </Link>
                            <Link
                                href="/work"
                                activeClass='work'
                                to="work"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="block px-3 py-2 mx-10 text-base font-medium text-black transition-all rounded-md cursor-pointer hover:bg-blue-600 hover:mx-8 hover:text-white"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/Services"
                                activeClass='Services'
                                to="Services"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="block px-3 py-2 mx-10 text-base font-medium text-black transition-all rounded-md cursor-pointer hover:bg-blue-600 hover:mx-8 hover:text-white"
                            >
                                Services
                            </Link>
                            <Link
                                href="/Contact"
                                activeClass='Contact'
                                to="Contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="block px-3 py-2 mx-10 text-base font-medium text-black transition-all rounded-md cursor-pointer hover:bg-blue-600 hover:mx-8 hover:text-white"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    </div>
  )
}

export default Navbar

