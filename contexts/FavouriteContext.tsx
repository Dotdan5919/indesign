'use client'

import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'


export const FavouriteContext=createContext();


interface FavouriteType{

    children:ReactNode;
}
export default function FavouriteProvider({children}:FavouriteType) {

const [favouriteArray,setFavouriteArray]=useState();


const values={

    favouriteArray,
    setFavouriteArray
}

    
  return (
    <FavouriteContext.Provider value={values}>
{children}
      
    </FavouriteContext.Provider>
  )
}
