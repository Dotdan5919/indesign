'use client'

import CartProvider from '@/contexts/CartContext'

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
} 