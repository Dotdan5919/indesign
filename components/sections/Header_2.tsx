import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Proptype{
title:string,

img?:StaticImageData,
previous?:string,
preprevious?:string

}
export default function Header_2({title,img,previous,preprevious}:Proptype) {
  return (
    <div className="sm:flex hidden flex-row justify-between">
 <div className="flex flex-col gap-5">


<div className='flex flex-row gap-3'>
  <Link href={'/'}>Home</Link> /
  <p className='capitalize'><Link href={`/${preprevious}`}> {preprevious} </Link>
  </p>/
   <p className='capitalize'><Link href={`/${preprevious}/${previous}`}>{previous}</Link>  </p>/ 
  <p className='text-prim  '>{title}</p>
  
  </div>




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
