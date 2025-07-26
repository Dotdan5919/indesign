import React from 'react'
import Img_new from '@/images/2.jpg'
import Image from 'next/image'

export default function Popularblogs() {
  return (
    <div className="flex flex-col shadow-sm bg-white p-4 items-start ">

<h1>Popular Blogs</h1>

<div className="flex flex-col p-5">


<div className="flex gap-2 hover:text-prim cursor-default">
    
    <div className="flex w-20 h-20 overflow-hidden relative"> 

<div className="flex bg-prim absolute w-full h-full hover:opacity-70 opacity-0"> 


</div>
<Image src={Img_new} alt="title" className=''/>


    </div>
<div className="flex flex-col gap-1 items-start justify-center">

<h1 className='font-bold'> This is title</h1>
<p className='text-[10px] text-gray-600'>July 25, 2025</p>
</div>

</div>


</div>



</div>
  )
}
