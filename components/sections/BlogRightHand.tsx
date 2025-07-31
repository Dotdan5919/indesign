'use client'
import React from 'react'

import Image, { StaticImageData } from 'next/image'


import useBlog from '@/hooks/useBlog'
import { useSearchParams } from 'next/navigation'


interface BlogTypes{

id:number,
    img:StaticImageData,
    date:string,
    title:string,
    description:unknown,
    cartegory:string
}
export default function BlogRightHand() {

  const {BlogsArray} =useBlog();
  const params = useSearchParams();
  const value = params.get('id') ?? '0';
  const Intvalue = parseInt(value, 10); // convert to integer

  const Blog=BlogsArray.find(item=>item.id===Intvalue) as BlogTypes;

  return (
    <div className='sm:w-[70%] w-full md:[70%] flex flex-col gap-4'>

<div className="flex w-full h-60 overflow-hidden">

        <Image src={Blog.img}  className='h-full object-cover' alt='blog_title'/>
</div>

<h1 className='font-bold'>{Blog.title}</h1>

<p className='text-xs leading-7'> {Blog.description}</p>
      


   

    </div>
  )
}
