'use client'

import { useCart } from '../contexts/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

