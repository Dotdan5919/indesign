import React from 'react'
import Image from 'next/image'

export default function ImageBox({img,name,position}) {
  return (
   <div className="relative w-full overflow-hidden h-60 flex items-center justify-center">

<div className="flex flex-col item-start w-full h-full absolute opacity-0 hover:opacity-100 text-white justify-end p-5 transition-all duration-500 z-50">
<h1 className='font-bold text-2xl z-20 '>{name}</h1>    
<p className='z-20'>{position}</p>

<div className=" w-full h-full p-32 bg-prim opacity-50 absolute z-0 top-0 left-0"></div>
</div>



<Image src={img} alt='image' className='object-cover h-full z-0' />

</div>
  )
}
