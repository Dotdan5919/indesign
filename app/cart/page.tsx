'use client'

import React from 'react'
import useCart from '@/hooks/useCart'
import CartHeader from '@/components/CartHeader'
import EmptyCart from '@/components/EmptyCart'
import CartItemsList from '@/components/CartItemsList'
import OrderSummary from '@/components/OrderSummary'
import CartLoading from '@/components/CartLoading'
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

export default function CartPage() {
  const { cartArray, addToCart, removeCart, clearCart, isLoaded } = useCart()

  const calculateTotal = () => {
    return cartArray.reduce((total, item) => {
      return total + (item.product.price * item.quantity)
    }, 0)
  }

  const getTotalItems = () => {
    return cartArray.reduce((total, item) => total + item.quantity, 0)
  }

  const handleRemoveAll = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      removeCart(product)
    }
  }

  if (!isLoaded) {
    return <CartLoading />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CartHeader />

        {cartArray.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CartItemsList
              cartArray={cartArray}
              onAdd={addToCart}
              onRemove={removeCart}
              onRemoveAll={handleRemoveAll}
              totalItems={getTotalItems()}
            />
            
            <OrderSummary
              totalItems={getTotalItems()}
              totalPrice={calculateTotal()}
              onClearCart={clearCart}
            />
          </div>
        )}
      </div>
    </div>
  )
} 