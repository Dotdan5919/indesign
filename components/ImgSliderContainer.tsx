import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ImgSliderContainerProps {
  img: StaticImageData | string;
}

export default function ImgSliderContainer({ img }: ImgSliderContainerProps) {
  return (
     <div className=" h-[600px] w-[420px]  bg-amber-400 flex    overflow-hidden relative">



 <Image src={img} className=' h-full w-max object-cover'   alt='text'/>



 </div> 
  )
}
