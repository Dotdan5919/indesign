// components/ClientProviders.tsx
'use client'
import ShoppingProvider from '@/contexts/ShoppingContext'
import FavouriteProvider from '@/contexts/FavouriteContext'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ShoppingProvider>
      <FavouriteProvider>
        {children}
      </FavouriteProvider>
    </ShoppingProvider>
  )
}