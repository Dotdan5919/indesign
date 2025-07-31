'use client'

import React from 'react'
import useFavorite from '@/hooks/useFavorite'
import WishlistHeader from '@/components/WishlistHeader'
import WishlistEmpty from '@/components/WishlistEmpty'
import WishlistList from '@/components/WishlistList'
import WishlistLoading from '@/components/WishlistLoading'

export default function WishlistPage() {
  const { wishlistArray, removefromWishlist, isLoaded } = useFavorite()

  if (!isLoaded) {
    return <WishlistLoading />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <WishlistHeader />
        {wishlistArray.length === 0 ? (
          <WishlistEmpty />
        ) : (
          <WishlistList products={wishlistArray} onRemove={removefromWishlist} />
        )}
      </div>
    </div>
  )
}