'use client'

import React from 'react'

export default function CartLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-prim mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading cart...</p>
      </div>
    </div>
  )
} 