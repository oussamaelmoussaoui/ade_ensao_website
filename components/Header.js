import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import DarkModeToggle from './DarkModeToggle'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full py-0 
    md:py-4 backdrop-blur bg-white/70 transition-all duration-300 ease-in-out"
    >
      <div className="container flex items-center justify-between relative max-w-7xl
      mx-auto px-6">

        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <Image src="/logoblack.png" alt="ADE logo" width={65} height={65} className="bg-transparent" />
          </span>
        </Link>

        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`${
            open ? 'flex ' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 md:gap-4 items-center text-sm 
          md:static absolute top-full left-0 w-full md:w-auto 
          bg-white md:bg-transparent 
          shadow md:shadow-none p-6 md:p-0`}
        >
          <Link href="/about" className="hover:text-adeBlue-600 transition whitespace-nowrap text-base">ADE</Link>
          <Link href="/clubs" className="hover:text-adeBlue-600 transition whitespace-nowrap text-base">Clubs</Link>
          <Link href="/resources" className="hover:text-adeBlue-600 transition whitespace-nowrap text-base">Qraytna</Link>
          <Link href="/contact" className="flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-adeBlue-600 transition whitespace-nowrap text-base">
            <span>Contact</span>
            <FaEnvelope className="ml-1" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
