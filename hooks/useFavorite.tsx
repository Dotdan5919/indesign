import { FavouriteContext } from '@/contexts/FavouriteContext'
import React, { useContext } from 'react'

export default function useFavorite() {

    const context=useContext(FavouriteContext);



    if(!context){

        throw new Error('favorite Context must be used inside a context provider')
    }

  


    return context;
}
