
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Proptype{
title:string,
subtitle:string,
img?:StaticImageData,
previous?:string,

}
export default function Header({title,subtitle,img,previous}:Proptype) {
  return (
    <div className="flex flex-row justify-between">
 <div className="flex flex-col gap-5">


<div className='flex flex-row gap-3'><Link href={'/'}> Home </Link>/
  {previous ?( <><Link href={`/${previous}`} > <p className='capitalize'>{previous} </p> </Link> / <p className='text-prim'>{title}</p></>):( <p className='text-prim'>{title}</p>) }
  
  
  </div>

<h1 className='font-bold text-[45px]'>{title}</h1>

<p className='text-gray-500'>{subtitle}</p>


</div>

{ img && (
<div className="flex relative sm:w-96 w-60">

<Image src={img} className='w-96 h-90 absolute' alt='Indesign service Img'/>
<div className="flex w-40 h-30 absolute bg-prim p-10 top-64 -right-5 -z-10"></div>

</div>
)


}


</div>
  )
}
