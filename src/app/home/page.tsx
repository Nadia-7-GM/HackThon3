"use client"

import Link from "next/link"
import React from "react"
import Image from "next/image"
import { FaArrowRight, FaShoppingCart } from "react-icons/fa"

function Page() {
  const products = [
    {
      name: "Library Stool Chair",
      price: "$20",
      image: "/p1.png",
      Link: "/shop",
    },
    {
      name: "Scandi Dip Set",
      price: "$40",
      image: "/p8.png",
      Link: "/shop",
    },
    {
      name: "Rose Luxe Armchair",
      price: "$20",
      image: "/p2.png",
      Link: "/shop",
    },
    {
      name: "SleekSpin",
      price: "$20",
      image: "/p9.png",
      Link: "/shop",
    },
  ]

  const product = [
    { image: "/p1.png", name: "Library Stool Chair", price: "$20", Link: "/shop" },
    { image: "/p2.png", name: "Rose Luxe Armchair", price: "$20", Link: "/shop" },
    { image: "/p3.png", name: "Citrus Edge", price: "$20", Link: "/shop" },
    { image: "/p4.png", name: "Ivory Charm", price: "$20", Link: "/shop" },
    { image: "/p6.png", name: "Nordic Spin", price: "$20", Link: "/shop" },
    { image: "/p5.png", name: "Gray Elegance", price: "$8", Link: "/shop" },
    { image: "/p7.png", name: "Modern Cozy", price: "$20", Link: "/shop" },
    { image: "/p9.png", name: "SleekSpin", price: "$20", Link: "/shop" },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-bl-3xl bg-[#F0F2F3] px-20 py-20 md:py-16 lg:py-40 mb-2">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
              <div className="space-y-8 text-center lg:text-left lg:w-1/2">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-600">WELCOME TO CHAIRY</p>
                <h1 className="text-3xl font-bold tracking-tight text-[#272343] sm:text-4xl md:text-5xl lg:text-6xl">
                  Best Furniture Collection For Your Interior.
                </h1>
                <Link
                  href="/shop"
                  className="inline-flex items-center px-[24px] py-[14px] text-sm font-medium text-white bg-[#00B4B4] rounded hover:bg-[#009999] transition-all duration-300 ease-in-out group w-fit"
                >
                  Shop Now
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 lg:w-1/2">
                <Image
                  src="/chair.png"
                  alt="Modern grey upholstered chair with black metal legs"
                  fill
                  className="w-[434px] h-[584px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-20">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div key={index} className="relative w-[85px] h-[87px]">
                <Image
                  src={`/home${index}.png`}
                  alt={`Featured brand ${index}`}
                  width={85}
                  height={87}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black text-center sm:text-left">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-lg relative group transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Product Image with Link */}
                <Link href="/shop">
                  <div className="relative aspect-[262/312] w-full overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="p-2 sm:p-3">
                  {/* Product Name with Link */}
                  <Link href="/shop">
                    <h3 className="text-xs sm:text-sm font-medium text-black group-hover:text-[#009999] transition-colors duration-300 truncate">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price and Cart Icon */}
                  <div className="flex justify-between items-center mt-1 sm:mt-2">
                    <p className="text-xs sm:text-sm text-[#00B4B4] font-bold">{product.price}</p>
                    <Link
                      href="/shop"
                      className="bg-white text-gray-500 p-2 rounded text-xs sm:text-sm flex items-center justify-center hover:bg-[#009999] hover:text-white transition-all duration-300"
                    >
                      <FaShoppingCart size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Top Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Wing Chair", image: "/p6.png", description: "3584 Products", link: "/shop" },
              { name: "Wooden Chair", image: "/p8.png", description: "157 Products", link: "/shop" },
              { name: "Desk Chair", image: "/p9.png", description: "154 Products", link: "/shop" },
            ].map((category) => (
              <div key={category.name} className="relative rounded-lg overflow-hidden">
                {category.link ? (
                  <Link href={category.link} passHref>
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        layout="responsive"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        <h3 className="text-lg font-medium">{category.name}</h3>
                        <p className="text-sm">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      layout="responsive"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-2">
                      <h3 className="text-lg font-bold">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-12 bg-white relative">
        <div className="mx-auto max-w-[69rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative">
            {/* Vertical Text */}
            <div className="absolute top-0 -left-[230px] flex items-center h-full">
              <div className="text-gray-800 font-semibold text-2xl sm:text:2xl transform -rotate-90 origin-left sm:origin-center whitespace-nowrap">
                EXPLORE NEW POPULAR STYLES
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="row-span-2 col-span-2 md:col-span-1 relative">
              <div className="relative h-48 sm:h-72 md:h-[450px]">
                <Image src="/p3.png" alt="Featured chair" fill className="object-cover rounded-lg" />
              </div>
            </div>

            {/* Additional Images */}
            {["/p4.png", "/p5.png", "/p1.png", "/p2.png"].map((src, index) => (
              <div key={index} className="relative h-48 sm:h-56 md:h-64 lg:h-[212px]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center text-black">Our Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {product.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Product Image with Link */}
                <Link href="/shop">
                  <div className="relative aspect-[262/312] w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                </Link>

                {/* Product Name with Link */}
                <Link href="/shop">
                  <h3 className="text-xs sm:text-sm font-medium text-black group-hover:text-[#009999] transition-colors duration-300 truncate mt-2 ml-2">
                    {item.name}
                  </h3>
                </Link>

                <div className="flex justify-between items-center mt-1 sm:mt-2 ml-2">
                  <p className="text-xs sm:text-sm text-[#00B4B4] font-bold mb-2">{item.price}</p>

                  {/* Cart Button with Link */}
                  <Link
                    href="/shop"
                    className="bg-white text-gray-500 p-2 rounded text-xs sm:text-sm flex items-center justify-center hover:bg-[#009999] hover:text-white transition-all duration-300"
                  >
                    <FaShoppingCart size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page

