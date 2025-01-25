'use client'

import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi'

const featuredProducts = [  
  { id: 1, imageUrl: '/p8.png', link:'/product8' },  
  { id: 2, imageUrl: '/p9.png', link:'/product9' },  
  { id: 3, imageUrl: '/p1.png', link:'/product1' },  
  { id: 4, imageUrl: '/p2.png', link:'/product2' },  
  { id: 5, imageUrl: '/p3.png', link:'/product3' },  
];  

function ProductPage() {
  return (
    <div className='bg-white py-10'>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 bg-white">  
        <div className="flex flex-col md:flex-row bg-white">  
          {/* Product Image */}  
          <div className="md:w-1/2 p-4 md:p-10">  
            <Image  
              src="/p7.png"
              alt="Library Stool Chair"  
              width={500}
              height={500}
              layout="responsive"
              className="object-cover"  
            />  
          </div>  
          {/* Product Details */}  
          <div className="md:w-1/2 p-4 md:p-10 flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-black">Modern Cozy  <br /> Chair</h1>
            <h2 className="bg-[#029FAE] text-sm text-white px-2 py-1 w-[100px] rounded-full mb-4">
              $20.00 USD
            </h2>
            <span className="border-gray-300 w-full md:w-[300px] border-b-2 mb-4"></span>
            <p className="text-gray-600 mb-6">
              
            The Modern Cozy Chair combines compact<br /> design with comfort and portability, making<br /> it ideal for seating and reaching high shelve<br /> in libraries, homes, or offices.
            </p>
            <Link href="/product" passHref>
              <button className="bg-[#029FAE] text-white px-4 py-2 rounded-md flex items-center gap-2">
                <FiShoppingCart className="w-5 h-5" />
                Add To Cart
              </button>
            </Link>
          </div>
        </div>  

        {/* Featured Products */}  
        <h2 className="text-xl font-bold mt-20 mb-10 text-black tracking-widest">FEATURED PRODUCTS</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Link href={product.link} className="relative block w-full">
                <Image
                  src={product.imageUrl}
                  alt="Featured Product"
                  width={200}
                  height={200}
                  layout="responsive"
                  className="object-cover mb-2"
                />
              </Link>
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default ProductPage