'use client'

import { useCart } from '../../../contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product } from '../../../types/product'
import { Camera } from 'lucide-react'

function ImageWithFallback({ item }: { item: Product }) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !item.image?.asset?.url) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
        <Camera className="w-8 h-8 text-gray-400 mb-2" />
        <span className="text-sm text-gray-500">{item.title}</span>  
      </div>
    )
  }

  return (
    <>
      <Image
        src={item.image.asset.url}
        alt={item.title}
        fill
        className="object-cover hover:opacity-75 transition-opacity"
        onError={() => setImageError(true)}
        sizes="150px"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-5 transition-opacity" />
    </>
  )
}   

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart() as unknown as {
    cart: (Product & { quantity: number })[],
    removeFromCart: (id: string) => void,
    updateQuantity: (id: string, quantity: number) => void,
    cartTotal: number
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link href="/product">
          <button className="bg-[#029FAE] text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
            Continue Shopping
          </button>
        </Link>
      </div>
    )
  }


  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
              <div className="space-y-6">
                {cart.map((item: Product & { quantity: number }) => (
                  <div key={item._id} className="bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="flex gap-6 p-6">
                      <div className="relative w-[150px] h-[150px] bg-gray-100 rounded-lg overflow-hidden shrink-0">
                        <ImageWithFallback item={item} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                            {item.badge && (
                              <span className="inline-block px-2 py-1 text-xs bg-teal-100 text-teal-800 rounded mt-1">
                                {item.badge}
                              </span>
                            )}
                            <div className="mt-4">
                              <label className="text-sm text-gray-600 mr-2">Quantity:</label>
                              <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                className="border rounded px-2 py-1 text-sm"
                              >
                                {Array.from(
                                  { length: Math.min(5, item.inventory) },
                                  (_, i) => i + 1
                                ).map((num) => (
                                  <option key={num} value={num}>
                                    {num}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            {item.priceWithoutDiscount && (
                              <p className="text-sm text-gray-500 line-through">
                                ${(item.priceWithoutDiscount * item.quantity).toFixed(2)}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="mt-4 text-sm text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-medium text-gray-900">Free</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <Link href="/checkout" className="block">
                      <button className="w-full bg-[#029FAE] hover:bg-teal-600 text-white font-medium py-4 px-6 rounded-full transition-colors">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}