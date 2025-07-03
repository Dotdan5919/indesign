'use client'

import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react'

interface Proptype{
title:string,
list?:string[],

}
export default function Dropdown({title,list}:Proptype) {

    const [toggle,setToggle] =useState(true);

const handlePress=()=>
{


    
setToggle(!toggle);


}


  return (
   <div className="flex flex-col gap-5  w-fit ">

<div className="flex gap-5 items-center">

<span className='bg-prim w-6 h-6 flex items-center justify-center' onClick={handlePress}> <span className="flex w-2 h-2 bg-white"></span> </span>

  <h1 className='font-bold text-sm w-36'>{title}</h1>
  </div>

    <AnimatePresence>
{ list && toggle && (
    

<motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:100}} transition={{duration:.5,ease:'easeOut'}}  exit={{y:-20,opacity:0}} className="flex h-fit flex-row gap-10 w-60">
<hr className='h-32 border-1 opacity-30 bg-slate-400 w-1 ' />
<ul className='gap-2 h-fit flex flex-col text-xs list-disc'>

{list.map((e)=>{


return(
<li key={e}>{e} </li>
)

})}
    

</ul>

</motion.div>

)

}


</AnimatePresence>





  
</div>
  )
}
