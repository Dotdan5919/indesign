// components/ClientProviders.tsx
'use client'
import ShoppingProvider from '@/contexts/ShoppingContext'
import FavouriteProvider from '@/contexts/FavouriteContext'
import CartProvider from './CartContext'
import BlogProvider from './BlogContext'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
<CartProvider>
    <ShoppingProvider>
      <FavouriteProvider>
        <BlogProvider>
        {children}
        </BlogProvider>
      </FavouriteProvider>
    </ShoppingProvider>
</CartProvider>
  )
}