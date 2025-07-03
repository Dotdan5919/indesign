'use client'
import React from 'react'
import Title from '../Title'
import team1 from '@/images/Team/t-1.jpg'
import team2 from '@/images/Team/t2.jpg'
import team3 from '@/images/Team/t3.jpg'
import team4 from '@/images/Team/t4.jpg'
import team5 from '@/images/Team/t5.jpg'
import team6 from '@/images/Team/t6.jpg'
import team7 from '@/images/Team/t7.jpg'

import Image from 'next/image'
import ImageBox from '../ImageBox'

import {motion} from "motion/react"

interface Proptype{

  service?:boolean

}


export default function Team({service}:Proptype) {
  return (
    <motion.div initial={{y:-100}} transition={{duration:.5,ease:'easeOut'}} whileInView={{y:0}}  className='flex flex-col w-full h-fit p-8 pb-20 gap-16 sm:p-20 sm:px-32 '>


<div className="flex sm:flex-row flex-col w-full h-fit justify-between gap-4 ">


<Title title="A Team United by shared Values" />

{service && (
<p className=' sm:text-right text-left sm:text-sm text-xs'> We are fans of our business, we work for your emotions, We are happy <br/>
to see the family enjoying something new in their life and we are<br/>
happy with them, because interior design in something more</p>)}

</div>

<div className="grid lg:grid-rows-2 grid-rows-5 lg:grid-cols-5 grid-cols-2  bg-prim  ">


<div className="flex flex-col h-40 bg-prim p-8 place    col-start-1 col-span-2 row-start-1 row-span-2 text-white">

<h1 className='text-[200px] font-myblack h-fit w-fit '>6</h1>
<p  className='font-bold text-md '>Professional designers in our team</p>

</div>

<ImageBox img={team4} name="Paul Cain"  position="Arichitect"/>
<ImageBox img={team3} name="John Jackson"  position="Engineer"/>
<ImageBox img={team7} name="Peter Tolu"  position="Directo"/>
<ImageBox img={team1} name="Femi Adebayo"  position="Project Manager"/>
<ImageBox img={team5} name="Bukola Idowu"  position="CEO"/>
<ImageBox img={team2} name="Victor Adewunmi"  position="Developer"/>





</div>



      
    </motion.div>
  )
}
