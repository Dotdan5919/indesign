'use client'

import React from 'react'
import CartItem from './CartItem'
import { StaticImageData } from 'next/image'

interface Product {
  id: number
  price: number
  img: StaticImageData
  title: string
  categories: string
  novelties: boolean
  discounted: boolean
}

interface CartItemsListProps {
  cartArray: Array<{
    product: Product
    quantity: number
  }>
  onAdd: (product: Product) => void
  onRemove: (product: Product) => void
  onRemoveAll: (product: Product, quantity: number) => void
  totalItems: number
}

export default function CartItemsList({ cartArray, onAdd, onRemove, onRemoveAll, totalItems }: CartItemsListProps) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Cart Items ({totalItems})
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {cartArray.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 