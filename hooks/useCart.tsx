import { CartContext } from '@/contexts/CartContext'
import React, { useContext } from 'react'

export default function useCart() {


    const context=useContext(CartContext)
 

if(!context){

    throw new Error('Cart context must be wrapped in cart provider');
}

return context


}
