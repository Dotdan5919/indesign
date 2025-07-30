'use client'

import React from 'react'
import Link from 'next/link'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CartHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Link href="/shop" className="flex items-center gap-2 text-gray-600 hover:text-prim transition-colors">
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
          <span>Continue Shopping</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
    </div>
  )
} 