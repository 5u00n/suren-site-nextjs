import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Unica_One } from 'next/font/google';

const unica_one = Unica_One({
  display: 'swap',
  weight: '400',
  preload: false,
});
function Headers() {
  return (
    <header className="md:mt-10 sm:px-5 lg:px-16 w-screen  z-50 ">
      <nav className="flex items-center justify-between mx-auto  ">
        <Link href="/" className={`${unica_one.className} text-[38px] font-bold `}>
          SH
        </Link>
        <ul className="flex space-x-[40px] items-center font-figtree">
          <li>
            <Link href="/">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/hire-me">
              <button className="bg-[#458a4e] hover:bg-[#2d6e35] text-white font-bold py-2 px-4 rounded">
                Hire Me
              </button>
            </Link>
          </li>
          <li>
            <Link href="/join-me">
              <button className="bg-[#361e8d] hover:bg-[#271664] text-white font-bold py-2 px-4 rounded">
                Join Me
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Headers