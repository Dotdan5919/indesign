'use client'
import React, { useEffect, useState } from 'react'
import Header_2 from './Header_2'
import useShop from '@/hooks/useShop'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import Btn from '@/indesign/components/Btn'
import useFavorite from '@/hooks/useFavorite'

interface PropType{

  value:number
}
export default function ProductBody({value}:PropType) {

  const{allProducts}=useShop();
  
  const item=allProducts.find(product=>product.id===value);

   const[isWishlistActive,setIsWishlistActive]=useState(false);
  
      const {wishlistArray,removefromWishlist, addtoWishlist}=useFavorite();


      const handleWish= () => {

        isWishlistActive ? removefromWishlist(item) :addtoWishlist(item) 


      }
  
      useEffect(()=>{
  
          if(wishlistArray && Array.isArray(wishlistArray)){
  
            const isWishlist=wishlistArray.some(item=>item.id===value);
            setIsWishlistActive(isWishlist);
  
  
          }
  
            
  
      },[wishlistArray])
  

  return (
    <div>
      <Header_2 title={item.title}  previous='catalog' preprevious='shop' />



<div className="flex  w-full h-dvh">

<div className="flex w-[55%] h-auto ">
<Image src={item.img} alt='indesign product' className=' w-full h-auto ' />
</div>

<div className="flex flex-col gap-9 w-[45%] h-full  ">
<div className="flex bg-prim px-3 text-xs py-2 items-center text-white w-fit">New</div>
<h1 className='text-5xl font-bold'>{item.title}</h1>
<p className='h-[35%] overflow-auto'>{item.description}</p>


<div className="flex items-center gap-5">


  <h1 className='text-2xl font-black'>${item.price}</h1>

 
  <Btn name='Buy Now' icon='arrow'/>

<div className="flex bg-white rounded-full shadow-md w-3 h-3 p-5 items-center justify-center active:scale-95 hover:scale-110 transition-all duration-100" onClick={()=>handleWish()} >
    <FontAwesomeIcon icon={faHeart} className={`${isWishlistActive ? 'text-prim':'text-black'}`} />
</div>
</div>

</div>

</div>



      
    </div>
  )
}
