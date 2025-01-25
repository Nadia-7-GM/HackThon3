'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Product } from '../../../types/product';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg mb-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            
              <div className="relative aspect-[262/312] w-full overflow-hidden rounded-lg"> 
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            

            <div className="p-4">
              <Link href={`/product/${product._id}`}>
                <h3 className="text-sm sm:text-base font-medium transition-colors duration-300 text-black hover:text-[#00B4B4]">
                  {product.title}
                </h3>
              </Link>

              <div className="flex items-center justify-between mt-2">
                <p className="text-[#00B4B4] font-bold text-sm sm:text-base">${product.price}</p>
                <button
                  onClick={() => addToCart({
                    ...product, quantity: 1,
                    imageUrl: ''
                  })}
                  className="bg-white text-gray-500 px-2 py-1 rounded text-xs sm:text-sm flex items-center hover:bg-[#009999] hover:text-white transition-all duration-300"
                >
                  <FaShoppingCart className="mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Proceed to Cart Section */}
      <div className="w-full mt-8 mb-12 flex justify-center">
        <Link href="/cart" className="w-full max-w-xl">
          <button className="w-full bg-[#00B4B4] text-white py-4 rounded-md flex items-center justify-center gap-3 hover:bg-[#009999] transition-all duration-300 text-lg font-medium">
            <FaShoppingCart size={24} />
            <span>Proceed to Cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
}