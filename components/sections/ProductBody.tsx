'use client'
import React, { useEffect, useState } from 'react'
import Header_2 from './Header_2'
import useShop from '@/hooks/useShop'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Btn from '@/components/Btn'
import useFavorite from '@/hooks/useFavorite'
import useCart from '@/hooks/useCart'

interface PropType{

  value:number
}

interface Product {
    id:number,
    price:number,
    img:StaticImageData,
    title:string,
    categories:string,
    novelties:boolean,
    discounted:boolean,
    description:string


}
export default function ProductBody({value}:PropType) {

  const{allProducts}=useShop();
  const {addToCart,removeCart,cartArray}=useCart();

  const [isActiveCart,setActiveCart]=useState<boolean>(false);

  const item=allProducts.find(product=>product.id===value) as Product;

   const[isWishlistActive,setIsWishlistActive]=useState<boolean>(false);
  
      const {wishlistArray,removefromWishlist, addtoWishlist}=useFavorite();

const handleWish = () => {
    if (isWishlistActive) {
      removefromWishlist(item);
    } else {
      addtoWishlist(item);
    }
  }

  const handleCart = () => {
    if (isActiveCart) {
      removeCart(item);
    } else {
      addToCart(item);
    }
  }

  useEffect(() => {
    if (wishlistArray && Array.isArray(wishlistArray)) {
      const isWishlist = wishlistArray.some(item => item.id === value);
      setIsWishlistActive(isWishlist);
    }
    if (cartArray && Array.isArray(cartArray)) {
      const isCart = cartArray.some(item => item.product?.id === value);
      setActiveCart(isCart);
    }
  }, [wishlistArray, cartArray, value]);
  

  return (
    <div className=''>
      <Header_2 title={item.title}  previous='catalog' preprevious='shop' />



<div className="flex md:flex-row flex-col w-full md:h-dvh">

<div className="flex md:w-[55%] w-full h-auto ">
<Image src={item.img} alt='indesign product' className=' w-full h-fit ' />
</div>

<div className="flex flex-col gap-9 md:w-[45%] w-full h-full  ">
<div className="flex bg-prim px-3 text-xs py-2 items-center text-white w-fit">New</div>
<h1 className='text-5xl font-bold'>{item.title}</h1>
<p className='h-[35%] overflow-auto'>{item.description}</p>


<div className="flex items-center gap-5">


  <h1 className='text-2xl font-black'>${item.price}</h1>

 
  <Btn name={`${!isActiveCart ? 'Add to Cart' :'Remove from Cart'} `} icon='arrow' click={handleCart}/>

<div className="flex bg-white rounded-full shadow-md w-3 h-3 p-5 items-center justify-center active:scale-95 hover:scale-110 transition-all duration-100" onClick={()=>handleWish()} >
    <FontAwesomeIcon icon={faHeart} className={`${isWishlistActive ? 'text-prim':'text-black'}`} />
</div>
</div>

</div>

</div>



      
    </div>
  )
// ...existing code...
}
