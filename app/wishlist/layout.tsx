'use client'

import FavoriteProvider from '@/contexts/FavouriteContext'

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FavoriteProvider>
      {children}
    </FavoriteProvider>
  )
} 