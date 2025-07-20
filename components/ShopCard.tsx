import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import chair_1 from '@/images/chairs/chair_1.png'
import useFavorite from '@/hooks/useFavorite'
import Link from 'next/link'



interface Proptype{
newproduct?:boolean,
price:number,
img:StaticImageData,
title:string,
category:string;
click:()=>void,

id:number


}

export default function ShopCard({newproduct,price,img,title,category,click,id}:Proptype) {

    const[isWishlistActive,setIsWishlistActive]=useState(false);

    const{wishlistArray}=useFavorite();

    useEffect(()=>{

        if(wishlistArray && Array.isArray(wishlistArray)){

          const isWishlist=wishlistArray.some(item=>item.id===id);
          setIsWishlistActive(isWishlist);


        }

          

    },[wishlistArray,id])
    
    
  return (

    <div className="flex flex-col gap-7 scale-95 ">
    <div className="flex flex-col shadow-lg rounded-md md:w-80 w-full p-8">

<div className="flex w-full justify-between items-center">
    
    <div className="flex  hover:scale-125 duration-150 transition-all   ">

<FontAwesomeIcon icon={faHeart} onClick={click} className={`${isWishlistActive?('text-prim'):('text-black ')}  `}/>
</div>
{newproduct===true && (<div className="flex bg-prim px-3 text-xs py-2 text-white">New</div>)}




</div>
<Image src={img} alt='chair' />












<div className="flex bg-gray-200 p-5 justify-between items-center rounded-2xl">

view details




<div className="flex items-center justify-center  relative">
    <p className='pr-2 '>
${price}

</p>

<div className="flex p-2 bg-white text-prim shadow-sm rounded-full absolute left-12 hover:scale-110 transition-all duration-100 ">
<Link href={`/shop/catalog/product?productid=${id}`}>
<FontAwesomeIcon icon={faArrowRight} />
</Link>
</div>

</div>
</div>




</div>

<div className="flex text-left flex-col">
<p>{category}</p>
<h1 className='text-xl font-bold'>{title}</h1>
</div>

</div>
  )
}
