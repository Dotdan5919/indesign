'use client'

import React, {  ReactNode, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'

import { StaticImageData } from 'next/image'
import { json } from 'stream/consumers'


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

  LOAD_FROM_STORAGE:'LOAD_FROM_STORAGE'

};



const wishlistReducer=(state,action)=>{
    const currentState={...state,wishlist:Array.isArray(state.wishlist) ?state.wishlist : []};


    switch (action.type){
        case WISHLIST_ACTIONS.ADD_ITEM:
            
            if(!currentState.wishlist.find(item=>item.id===action.payload.id))
                {
                    
                    const newState= {
                        ...currentState,
                        wishlist:[...currentState.wishlist,action.payload]
                        
                    };
                if(typeof window!= 'undefined')
                {

                    localStorage.setItem('wishlist',JSON.stringify(newState.wishlist))
                }

                return newState;
                    
                };

               
                
                return currentState;
                
                
                case WISHLIST_ACTIONS.REMOVE_ITEM:

       

                    
                const filteredwishlist=currentState.wishlist.filter(item=>item.id!=action.payload.id);
                    if(typeof window != 'undefined'){

                        localStorage.setItem('wishlist',JSON.stringify(filteredwishlist))
                        }
                    return{
                        
                        ...currentState,
                        wishlist:filteredwishlist
                    };


                    case WISHLIST_ACTIONS.LOAD_FROM_STORAGE:
                        
                    const validPayload = Array.isArray(action.payload) ? action.payload : [];
                        return {

                            ...currentState,
                            wishlist:validPayload
                        }
                    
                    
                    default:
            return currentState;

        

    }






}



interface FavouriteType{

    children:ReactNode;
}


export default function FavouriteProvider({children}:FavouriteType) {

    const initialState={wishlist:[]};
    
const [wishlistState,wishlistDispatch]=useReducer(wishlistReducer,initialState);

const [isLoaded,setIsLoaded]=useState(false);

const loadfromStorage=()=>
{
try{
    const savedWishlist=localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist):[];

}

catch(error)
{
    console.error('Error loading wishlist :',error);

    return [];
}




}
const removefromWishlist=(product:Product)=>
{

   wishlistDispatch({type:'REMOVE_ITEM',payload:product});
  


}
const addtoWishlist=(product:Product)=>
{

    wishlistDispatch({type:'ADD_ITEM',payload:product});
  
    

}

const clearWishlist=()=>{


    if(typeof window!= 'undefined')
    {

        localStorage.removeItem('wishlist');


    }
    wishlistDispatch({type:'LOAD_FROM_STORAGE',payload:[]});
    
}


useEffect(()=>{

const savedWishlist=loadfromStorage();

const validateList=Array.isArray(savedWishlist) ? savedWishlist : [];

wishlistDispatch({type:'LOAD_FROM_STORAGE',payload:validateList});
setIsLoaded(true)

},[]);




const values={

   wishlistArray:wishlistState?.wishlist || [],
   addtoWishlist,
   removefromWishlist,
   clearWishlist,
   isLoaded
   
}

    
  return (
    <FavouriteContext.Provider value={values}>
{children}
      
    </FavouriteContext.Provider>
  )
}
