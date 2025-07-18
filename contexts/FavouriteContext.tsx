'use client'

import React, { act, ReactNode, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import chair_1 from '@/images/chairs/chair_1.png'
import { StaticImageData } from 'next/image'


interface Product {
    id:number,
    price:number,
    img:StaticImageData,
    title:string,
    categories:string,
    novelties:boolean,
    discounted:boolean


}
export const FavouriteContext=createContext();
 const WISHLIST_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',

  REMOVE_ITEM: 'REMOVE_ITEM',

};



const wishlistReducer=(state,action)=>{

    switch (action.type){
        case WISHLIST_ACTIONS.ADD_ITEM:
            
            if(!state.wishlist.find(item=>item.id===action.payload.id))
                {
                    
                    return {
                        wishlist:[...state.wishlist,action.payload]
                        
                    };

                    
                };
                
                return state;
                
                
                case WISHLIST_ACTIONS.REMOVE_ITEM:
                    
                    
                    return{
                        
                        ...state,
                        wishlist:state.wishlist.filter(item=>item.id!=action.payload.id)
                    };
                    
                    
                    default:
            return state;

        

    }






}



interface FavouriteType{

    children:ReactNode;
}


export default function FavouriteProvider({children}:FavouriteType) {

    const initialState={wishlist:[]};
    
const [wishlistState,wishlistDispatch]=useReducer(wishlistReducer,initialState);


const removefromWishlist=(product:Product)=>
{

   wishlistDispatch({type:'REMOVE_ITEM',payload:product});
    console.log("Removed")
    console.log(wishlistState)


}
const addtoWishlist=(product:Product)=>
{

    wishlistDispatch({type:'ADD_ITEM',payload:product});
    console.log("added")
    console.log(wishlistState)
    

}


// useEffect(()=>{

//     addtoWishlist({id:1,price:100,img:chair_1,title:"Modern Chair",categories:"Chairs",novelties:false,discounted:false});

// })




const values={

   wishlistState,
   addtoWishlist,removefromWishlist
}

    
  return (
    <FavouriteContext.Provider value={values}>
{children}
      
    </FavouriteContext.Provider>
  )
}
