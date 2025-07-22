'use client'
import React from 'react'
import Title from '../Title'
import Btn from '../Btn'
import img from '@/images/3.jpg'
import Image from 'next/image'

import { motion } from "motion/react"

export default function Getintouch() {
  return (
    <div className='flex flex-row pt-4 w-full h-96 bg-[url("/images/bg.jpg")] items-center justify-center   p-8 pb-20 gap-8 sm:p-20 sm:px-32'>
      
      <div className="flex flex-col lg:w-3/5 gap-16">
<Title title={<>Get a free consultation <br /> Just leave a request below</>} />

<div className="flex flex-row w-full gap-8  ">

<input type="tex" className=' px-8 py-4 w-1/2 bg-white  shadow-xl ' placeholder='Get in touch' />

<Btn name="Call back" />


</div>



</div>

<motion.div initial={{y:-30,rotateY:20}} transition={{duration:.7}} whileInView={{y:0,rotateY:0}} className="md:flex hidden w-[400px] h-[600px] items-center jusitify-center overflow-hidden">
<Image src={img} className="w-full h-full object-cover" alt='text'/>
</motion.div>

    </div>
  )
}
