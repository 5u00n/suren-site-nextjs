import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function Headers() {
  return (
    <header className=" my-4 mx-auto px-4 lg:mx-16">
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold font-unica">
          SHembram
        </Link>
        <ul className="flex space-x-16 items-center font-figtree">
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