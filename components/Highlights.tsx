'use client'
import React from 'react'

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from 'react';

interface PropType{

    figure:number,
    name:string,
    cls?:string



}
export default function Highlights({figure,name,cls}:PropType) {

    const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count,figure, { duration: 2,ease:'easeIn' });
    return controls.stop;
  }, [count, figure]);


  return (
    
      
// flex flex-col


      <div className={`flex flex-col gap-2 w-fit ${cls ?? ''}`}>
<motion.h1 className="text-prim font-bold text-[60px]">{rounded}</motion.h1>
<p className='w-24'>{name}</p>
</div>
   
  )
}
