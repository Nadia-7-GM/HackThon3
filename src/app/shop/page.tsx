"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaShoppingCart, FaEye } from "react-icons/fa"

const products = [
      {id: 1, image: "/p1.png", name: "Library Stool Chair", price: "$20", Link1: "/product1", Link2: "/product" },
      {id: 2, image: "/p2.png", name: "Rose Luxe Armchair", price: "$20", Link1: "/product2", Link2: "/product" },
      {id: 3, image: "/p3.png", name: "Citrus Edge", price: "$20", Link1: "/product3", Link2: "/product" },
      {id: 4, image: "/p4.png", name: "Ivory Charm", price: "$20", Link1: "/product4", Link2: "/product" },
      {id: 5, image: "/p6.png", name: "Nordic Spin", price: "$20", Link1: "/product5", Link2: "/product" },
      {id: 6, image: "/p5.png", name: "Gray Elegance", price: "$8", Link1: "/product6", Link2: "/product" },
      {id: 7, image: "/p7.png", name: "Modern Cozy", price: "$20", Link1: "/product7", Link2: "/product" },
      {id: 8, image: "/p8.png", name: "Scandi Dip Set", price: "$40", Link1: "/product8", Link2: "/product" },
      {id: 9, image: "/p9.png", name: "SleekSpin", price: "$20", Link1: "/product9", Link2: "/product" },
]

export default function ShopPage() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#272343]">Our Products</h1>
      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-6"
          >
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4 md:mb-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={100}
                height={100}
                className="object-cover rounded-lg mb-4 md:mb-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-[#272343]">{product.name}</h2>
                <p className="text-[#00B4B4] font-bold">{product.price}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                href={product.Link1}
                className="inline-flex items-center justify-center px-4 py-2 bg-[#00B4B4] text-white rounded-lg hover:bg-[#009999] transition duration-300 ease-in-out"
              >
                <FaEye className="mr-2" />
                View Details
              </Link>
              <Link
  href={product.Link2}
  className="inline-flex items-center justify-center px-4 py-2 bg-[#272343] text-white rounded-lg hover:bg-[#56565e] transition duration-300 ease-in-out"
>
  <FaShoppingCart className="mr-2" />
  Buy Now
</Link>

            </div>
          </div>
        ))}
      </div>
    </div></div>
  )
}

