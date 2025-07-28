'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import More from './More'

import {  useRouter } from 'next/navigation'


interface Proptype{
img:StaticImageData,
date:string,
title:string,
description:any,
category:string,
id:number



}

export default function Blogbox({img,date,title,description,category,id}:Proptype) {

const router=useRouter();

  const handleRoute=()=>{

router.push(`/blog/singleblog?id=${id}`);



  }
  return (
    <div className="flex flex-col gap-4 max-w-96 h-[480px] bg-white shadow-lg ">

        <div className=" w-full h-60 overflow-hidden">  
    <Image src={img} alt="bg" className='object-cover  ' />
    </div>

    


<div className="flex flex-col p-6 gap-4 relative">

    <div className="bg-prim absolute text-white text-xs p-3 -top-8">
{category}

    </div>

    <div className="flex flex-col gap-4">
        <p className='text-gray-300 text-xs'>{date}</p>

<h1 className="font-bold">{title}</h1>

<p className='text-xs'>{description}</p>

    </div>

    <More text="View more" click={handleRoute} />
    </div>

    


    </div>
  )
}
