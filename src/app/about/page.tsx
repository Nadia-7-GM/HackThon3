'use client'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="container mx-auto px-4 py-10 md:py-20">
          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 md:mb-40">
            <div className="bg-[#007580] p-6 md:p-10 text-white flex flex-col justify-center order-2 md:order-1">
              <h1 className="text-xl md:text-2xl font-semibold mb-4">About Us - Comforty</h1>
              <p className="mb-10 md:mb-20 text-sm leading-relaxed">
                At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic designs that combine style with modern aesthetics, we craft chairs that seamlessly blend style with functionality.
              </p>
              <Link href='/shop' className="self-start">
                <button className="bg-[#F9F9F926] text-sm py-3 px-5 hover:bg-white text-white font-normal hover:text-teal-700 border border-[#F9F9F926] hover:border-transparent rounded transition-all duration-300">
                  View collection
                </button>
              </Link>
            </div>
            <div className="relative h-[250px] md:h-[400px] lg:h-[500px] bg-gray-100 order-1 md:order-2">
              <Image
                src="/p3.png"
                alt="Minimalist white chair"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </section>

          {/* Brand Features */}
          <section className="mb-20">
            <h2 className="text-xl md:text-2xl text-black font-semibold text-center mb-10">
              What Makes Our Brand Different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-[#F9F9F9] rounded-lg flex flex-col"
                >
                  <div className="w-10 h-10 mb-4 text-teal-700">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title} 
                      width={40} 
                      height={40}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-2 text-[#007580]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#007580] flex-grow">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Products */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-10">
              Our Popular Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 w-full">
                <div className="group">
                  <div className="relative aspect-video bg-gray-100">
                    <Image
                      src="/a13.png"
                      alt="The Popular nordic sofa"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-sm text-[#2A254B] mt-4 mb-2">
                    The Popular suede sofa
                  </h3>
                  <p className="text-sm text-[#2A254B]">$99.00</p>
                </div>
              </div>
              <div className="lg:col-span-3 w-full">
                <div className="group">
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src="/a12.png"
                      alt="The Dandy chair"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="text-sm text-[#2A254B] mt-4 mb-2">
                    The Dandy chair
                  </h3>
                  <p className="text-sm text-[#2A254B]">$89.00</p>
                </div>
              </div>
              <div className="lg:col-span-3 w-full">
                <div className="group">
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src="/a11.png"
                      alt="The Dandy chair"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="text-sm text-[#2A254B] mt-4 mb-2">
                    The Dandy chair
                  </h3>
                  <p className="text-sm text-[#2A254B]">$99.00</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

const features = [
  {
    icon: "/a1.png",
    title: "Next day delivery",
    description: "Order before 3pm and get your item the next day as standard",
  },
  {
    icon: "/a2.png",
    title: "Made to high standards",
    description: "Handmade crafted pieces made with real passion and craftsmanship",
  },
  {
    icon: "/a3.png",
    title: "Affordable prices",
    description: "All our materials and quality you won't find better prices anywhere",
  },
  {
    icon: "/a4.png",
    title: "Free returns/exchanges",
    description: "We use 100% recycled to ensure our footprint is more manageable",
  }
]