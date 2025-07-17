'use client'
import React from 'react'

import {motion} from 'motion/react'


interface Prop{

    title?:string


}
export default function Title({title}:Prop) {
  return (
   <motion.div initial={{x:-20}} transition={{duration:1,ease:'easeOut'}} whileInView={{x:0}} className="w-fit flex flex-row gap-4 items-center ">

  <span className="border-2 border-prim w-12 h-0" ></span>
<h1 className="text-black font-bold  w-fit">{title}</h1>

</motion.div>
  )
}
