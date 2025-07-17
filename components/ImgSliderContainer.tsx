import Image from 'next/image'
import React from 'react'

export default function ImgSliderContainer({img}) {
  return (
     <div className=" h-[600px] w-[420px]  bg-amber-400 flex    overflow-hidden relative">



 <Image src={img} className=' h-full w-max object-cover'   alt='text'/>



 </div> 
  )
}
