'use client'

import React from 'react'

import { useContext } from 'react'

import { ShoppingContext } from '@/contexts/ShoppingContext'



export default function useShop() {

    const context=useContext(ShoppingContext);
 
    if(!context){

        throw new Error ('UseShop must be under shopping Provider');
    }

    return context
}
