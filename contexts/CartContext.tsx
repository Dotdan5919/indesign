'use client'

import React, { ReactNode, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'

export const CartContext= createContext();

const CART_ACTION={

    ADD_ITEM:'ADD_ITEM',
    REMOVE_ITEM:'REMOVE_ITEM',
    LOAD_FROM_STORAGE:'LOAD_FROM_STORAGE'


}

interface Product {
    id:number,
    price:number,
    img:StaticImageData,
    title:string,
    categories:string,
    novelties:boolean,
    discounted:boolean


}

const cart_reducer=(state,action) =>
{
    
    const foundProduct=state.products.find(item=>item.product?.id===action.payload.id); 

    switch (action.type){


        case CART_ACTION.ADD_ITEM:

            if(!foundProduct)
            {

                const newState=
                {
               
                products:[...state.products,{product:action.payload,quantity:1}]

               };
               console.log('New state',newState);

               if(typeof window!=undefined)
               {
                
                localStorage.setItem('cart',JSON.stringify(newState.products));

               }
               return  newState;

            }
            else{

                const otherProducts=state.products.filter(item=>item.product.id!=action.payload.id); 

                const newState={
                   
                   products:[...otherProducts,{product:action.payload,quantity:foundProduct.quantity+1}] 


                };

                 if(typeof window!=undefined)
               {
                
                localStorage.setItem('cart',JSON.stringify(newState.products));

               }
                return newState;



            }

           

      

        case CART_ACTION.REMOVE_ITEM:
 

        if(foundProduct){


            const otherProducts=state.products.filter(item=>item.product?.id!=action.payload.id); 



            if(foundProduct.quantity===1)
            {

                 if(typeof window!=undefined)
               {
                
                localStorage.setItem('cart',JSON.stringify(otherProducts));

               }
                return {
                    
                    products:[otherProducts]

                }


            }

            else{

                const newState={
                    products:[...state.products,{product:action.payload,quantity:foundProduct.quantity-1}]

                                }



                 if(typeof window!=undefined)
               {
                
                localStorage.setItem('cart',JSON.stringify(newState.products));
                
               }
                return newState

            }

           
        }


        return state;


         case CART_ACTION.LOAD_FROM_STORAGE:

        const validatePayload=Array.isArray(action.payload)?action.payload:[]

        return {...validatePayload};



        default:
            return state;





    }


}


interface CartType { children:ReactNode}

export default function CartProvider({children}:CartType) {

    const initialState={products:[]}

const [cartState,cartDispatch]=useReducer(cart_reducer,initialState);
const [isLoaded,setIsLoaded]=useState(false);


const loadfromStorage=()=>
{
try{

const savedCart=localStorage.getItem('cart');

return savedCart ? JSON.parse(savedCart):[];



}
catch(error){

    throw new Error("unable to load cart from local storage");
    return [];


}


}


const addToCart=(product:Product)=>{


    cartDispatch({type:'ADD_ITEM',payload:product});


}
const removeCart=(product:Product)=>{


    cartDispatch({type:'REMOVE_ITEM',payload:product});


}

const clearCart=()=>{


    if(typeof window!=undefined){


localStorage.removeItem('cart');
    }

cartDispatch({type:'LOAD_FROM_STORAGE',payload:[]})
    

}


useEffect(()=>{

    
const savedCart=loadfromStorage();

cartDispatch({type:'LOAD_FROM_STORAGE',payload:savedCart});

setIsLoaded(true);


},[]);





const values={
isLoaded,
removeCart,
addToCart,
clearCart,
cartArray:cartState?.products || []


}

  return (
   

<CartContext.Provider value={values}>

    {children}
</CartContext.Provider>

  )
}
