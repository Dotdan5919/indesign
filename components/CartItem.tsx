'use client'

import React from 'react'
import Image from 'next/image'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

interface CartItemProps {
  item: {
    product: Product
    quantity: number
  }
  onAdd: (product: Product) => void
  onRemove: (product: Product) => void
  onRemoveAll: (product: Product, quantity: number) => void
}

export default function CartItem({ item, onAdd, onRemove, onRemoveAll }: CartItemProps) {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <Image
            src={item.product.img}
            alt={item.product.title}
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {item.product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {item.product.categories}
          </p>
          {item.product.novelties && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
              New
            </span>
          )}
          {item.product.discounted && (
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-2 ml-2">
              Discounted
            </span>
          )}
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-900">
            ${item.product.price}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onRemove(item.product)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faMinus} className="w-3 h-3" />
          </button>
          
          <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">
            {item.quantity}
          </span>
          
          <button
            onClick={() => onAdd(item.product)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => onRemoveAll(item.product, item.quantity)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 