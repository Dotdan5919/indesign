'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Product {
  id: number
  price: number
  img: StaticImageData
  title: string
  categories: string
  novelties: boolean
  discounted: boolean
}

interface WishlistItemProps {
  product: Product
  onRemove: (product: Product) => void
}

export default function WishlistItem({ product, onRemove }: WishlistItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <div className="flex-shrink-0">
        <Image src={product.img} alt={product.title} width={60} height={60} className="rounded-lg object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium text-gray-900 truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.categories}</p>
        {product.novelties && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">New</span>
        )}
        {product.discounted && (
          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-2 ml-2">Discounted</span>
        )}
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-900">${product.price}</p>
      </div>
      <button
        onClick={() => onRemove(product)}
        className="text-red-500 hover:text-red-700 transition-colors"
        title="Remove from wishlist"
      >
        <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
      </button>
    </div>
  )
}