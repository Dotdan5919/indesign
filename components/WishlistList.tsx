'use client'

import WishlistItem from './WishlistItem'
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

interface WishlistListProps {
  products: Product[]
  onRemove: (product: Product) => void
}

export default function WishlistList({ products, onRemove }: WishlistListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border divide-y">
      {products.map((product) => (
        <WishlistItem key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  )
}