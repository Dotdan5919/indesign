'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import More from './More'

import {motion} from 'motion/react'


interface Proptype{
title:string,
description:string,
img:StaticImageData

}

export default function Card({title,description,img}:Proptype) {
  return (
    <motion.div initial={{y:-20,z:-900,opacity:0}} transition={{duration:1,ease:'easeOut'}} whileInView={{y:0,z:0,opacity:100}}  className="flex md:flex-row flex-col w-full md:h-96 h-fit shadow-2xl overflow-hidden">
  <div className="flex md:w-[400px] xl:w-[600px] w-full h-64 md:h-full">
<Image src={img} className='w-full h-full object-cover'  alt="indesign architecture image"/>
</div>
<div className="flex flex-col justify-center gap-8 md:w-3/5  w-full p-6 md:p-11">

<h1 className='font-mybold text-2xl'>{title}</h1>

<p className='text-xs leading-5'>{description}</p>


<More text='View more'/>
</div>





</motion.div>
  )
}
