'use client'

import React from 'react'
import Link from 'next/link'

interface OrderSummaryProps {
  totalItems: number
  totalPrice: number
  onClearCart: () => void
}

export default function OrderSummary({ totalItems, totalPrice, onClearCart }: OrderSummaryProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal ({totalItems} items)</span>
            <span className="font-medium">${totalPrice}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">Free</span>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full bg-prim text-white py-3 px-4 rounded-lg font-medium hover:bg-prim/90 transition-colors">
            Proceed to Checkout
          </button>
          
          <button
            onClick={onClearCart}
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600">
            Contact our customer support for any questions about your order.
          </p>
          <Link href="/contact" className="text-prim text-sm hover:underline mt-2 inline-block">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 