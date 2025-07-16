import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'

interface PropType{img:StaticImageData,name:string,subtitle:string,hoverProp?:boolean}

export default function ImgSliderContainer2({img,name,subtitle,hoverProp}:PropType) {
  return (
     <div className={` h-[400px] w-[320px] flex overflow-hidden relative  transition-all duration-400 ease-in ${hoverProp && 'hover:scale-110'} `} >


<div className="flex flex-col items-end justify-end  bg-gradient-to-t from-prim to-white/0   z-50 w-full h-full absolute top-0 left-0 text-white p-6 ">
<h1 className='w-full text-3xl font-mybold '>{name}</h1>
<p className='w-full'>{subtitle}</p>

</div>
{/* <div className=" w-full h-full bg-prim absolute z-20 ">
  </div> */}
 <Image src={img} className=' h-full w-max object-cover z-10'   alt='text'/>



 </div> 
  )
}
