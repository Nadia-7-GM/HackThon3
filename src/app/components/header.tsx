"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "../../../contexts/CartContext"
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <>
      <header className="bg-white fixed top-0 left-0 right-0 z-50">
        {/* Top Banner */}
        <div className="w-full bg-[#272343] text-sm text-[#F0F2F3] py-2">
        <div className="flex justify-center items-center text-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p>✓ Free Shipping On All Orders Over $50</p>
           </div>
        </div>

        {/* Main Header */}
        <div className="bg-[#F0F2F3]">
          <div className="flex justify-between items-center py-4 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-bold ml-2 text-gray-800">Comforty</span>
            </div>

            <Link href="/cart">
              <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg">
                <FaShoppingCart className="h-5 w-5 text-black mr-2" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-[#007580] text-white rounded-full px-2 py-0.5 text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex justify-between items-center py-5">
            <nav className="relative w-full">
              <button 
                className="md:hidden text-gray-800 focus:outline-none" 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <Image src="/closemenu.png" alt="Close Menu" width={24} height={24} />
                ) : (
                  <Image src="/openmenu.png" alt="Open Menu" width={24} height={24} />
                )}
              </button>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center space-x-8">
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/shop">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/product">
                  Select
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/about">
                  About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/faq">
                    Help
                  </Link>
                </li>
              </ul>

              {/* Mobile Menu - Full Screen */}
              <div className={`
                fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
                ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                md:hidden
              `}>
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                      <Image src="/logo.png" alt="Logo" width={40} height={40} />
                      <span className="text-2xl font-bold ml-2 text-gray-800">Comforty</span>
                    </div>
                    <button 
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      <Image src="/closemenu.png" alt="Close Menu" width={24} height={24} />
                    </button>
                  </div>

                  <nav className="flex flex-col space-y-6">
                    <Link 
                      href="/" 
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/shop" 
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                    Product
                    </Link>
                    <Link 
                      href="/product" 
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Select
                    </Link>
                    <Link 
                      href="/about" 
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/faq" 
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Help
                    </Link>
                  </nav>
                </div>
              </div>
            </nav>
            <div className="flex items-center text-gray-400 hover:text-[#007580] whitespace-nowrap">
  Contact: 0349-0669982
                     </div>
          </div>
        </div>
      </header>
      <div className="h-[180px]"></div>
    </>
  )
}