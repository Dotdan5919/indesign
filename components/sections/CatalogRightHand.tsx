'use client'

import React from 'react'
import CartegoriesChip from '../CartegoriesChip'

import  { StaticImageData } from 'next/image'


import ShopCard from '../ShopCard'
import useShop from '@/hooks/useShop'
import useFavorite from '@/hooks/useFavorite'
 

interface ProductItem {
    id: number;
    price: number;
    img: StaticImageData;
    title: string;
    categories: string;
    novelties: boolean;
    discounted: boolean;
    description: string;
}

export default function CatalogRightHand() {

        const { Novelties,Discounted,shownProducts}=useShop();

        const{addtoWishlist,removefromWishlist,wishlistArray}=useFavorite();




    
    
     
    
     
    
    



   



  return (
    <div className='flex flex-col gap-8 '>
      
<div className="flex w-full gap-2 px-4">
{Novelties && <CartegoriesChip title='Novelties'/>}
{Discounted && <CartegoriesChip title='Discounted'/>}


   
</div>
   
<div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-10">


{shownProducts.length>0 ? (shownProducts.map((product: ProductItem,index: number)=>{


  const safeWishlistArray = Array.isArray(wishlistArray) ? wishlistArray : [];
 const isInWishlist = safeWishlistArray.some(item => item.id === product.id);

    
    

    
return(


<ShopCard key={index} newproduct={true} price={product.price}  img={product.img} title={product.title} category={product.categories} 
click={() => isInWishlist ? removefromWishlist(product) : addtoWishlist(product)}
id={product.id}/>

)


})):( <div className="col-span-full text-center text-gray-500 h-44 p-8 flex items-center justify-center">
            No products found matching your criteria.
          </div>)}

</div>






    </div>
  )
}
