import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Unica_One } from 'next/font/google';

const unica_one = Unica_One({
  display: 'swap',
  weight: '400',
  preload: false,
});
function NavBar() {
  return (
    <nav className="w-full z-20 top-0 start-0  md:px-16 sm:px-5 xs:px-2">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 max-w-[1280px]">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={`${unica_one.className} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}>SH</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-figtree">
          <button className="text-white bg-[#458a4e] hover:bg-[#185c20] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3">
            Hire Me
          </button>
          <button className=" text-white bg-[#233fbd] hover:bg-[#142457] hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:text-gray-300 dark:focus:ring-gray-600 text-sm px-4 py-2 text-center rounded-lg">
            Join Me
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-figtree" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border dark:text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar