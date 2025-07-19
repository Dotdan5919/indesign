'use client'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import useShop from '@/hooks/useShop'
import { useRouter } from 'next/navigation'

interface PropType{img:StaticImageData,name:string,subtitle:string,hoverProp?:boolean}

export default function ImgSliderContainer2({img,name,subtitle,hoverProp}:PropType) {

  const {activeCategories,setActiveCategory}=useShop();
  const router=useRouter();

  const handleClick=()=>{
   const newCategory = name;
  setActiveCategory(newCategory);
  console.log('New active category:', newCategory);
  
  // If you need to pass it to the next page
  router.push(`/shop/catalog?category=${newCategory}`);

  }
  return (
     <div className={` h-[400px] w-[320px] flex overflow-hidden relative  transition-all duration-400 ease-in ${hoverProp && 'hover:scale-110'} `} onClick={handleClick} >


<div className="flex flex-col items-end justify-end  bg-gradient-to-t from-prim to-white/0   z-50 w-full h-full absolute top-0 left-0 text-white p-6 ">
<h1 className='w-full text-3xl font-mybold '>{name}</h1>
<p className='w-full'>{subtitle}</p>

</div>

 <Image src={img} className=' h-full w-max object-cover z-10'   alt='text'/>




 </div> 
  )
}
