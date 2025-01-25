'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiSmile } from 'react-icons/fi'

export default function OrderConfirmationPage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 animate-scaleIn">
            <div className="flex flex-col items-center">
              <div className="bg-[#029FAE] p-4 rounded-full mb-4">
                <FiSmile className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thanks From Comfort Living</h2>
              <p className="text-gray-600 text-center mb-6">
                Thank you for choosing us for your furniture needs. As a welcome gift enjoy 15% off your next purchase with code: COMFORT15
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                For Best Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We ll send you an email with your order details shortly.
        </p>
        <Link href="shop">
          <button className="bg-[#029FAE] text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors">
            Continue Shopping
          </button>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { 
            transform: scale(0.95);
            opacity: 0;
          }
          to { 
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}