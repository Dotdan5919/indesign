import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface Proptype{

    img:StaticImageData,
    position:string,
    name:string,
    description:string




}

export default function ImgTitle({img,position,name,description}:Proptype) {
  return (
 <div className="flex flex-col gap-2 text-gray-900 ">

<div className="flex w-36 h-32 items-center justify-center overflow-hidden">
<Image src={img} alt='avatar' className='w-36 h-auto object-cover'/>
</div>
<span className='text-xs'>{position}</span> 
<h1 className='font-mybold text-xl'>{name}</h1>
<p className='text-xs flex w-36'>{description}</p>



</div>
  )
}
