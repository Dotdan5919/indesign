'use client'

import Link from 'next/link'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WishlistEmpty() {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
        <FontAwesomeIcon icon={faHeart} className="w-8 h-8 text-gray-400" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h2>
      <p className="text-gray-600 mb-8">Browse products and add your favorites to your wishlist.</p>
      <Link 
        href="/shop" 
        className="inline-flex items-center px-6 py-3 bg-prim text-white font-medium rounded-lg hover:bg-prim/90 transition-colors"
      >
        Go to Shop
      </Link>
    </div>
  )
}