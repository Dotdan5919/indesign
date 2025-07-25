'use client'
import { faArrowCircleRight, faArrowLeft, faArrowRight, faAward, faChair } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRight, Icon } from 'lucide-react'
import React from 'react'
import IconText from './IconText'
import Btn from './Btn'
import {motion}  from "motion/react"

export default function Heroleft() {
  return (
    <motion.div   

    initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: .4, ease: 'easeOut' }}
   
   className='flex gap-10 flex-col items-start relative h-fit'>


      <motion.h1 className='text-6xl font-bold'>We Make <br/>
      Your H<span className="text-prim">o</span>me <br/>
      Better Today
      
      
      </motion.h1>
      
<motion.p className='font-light text-[16px]'>We are tending to the thousand of details it takes <br/> to create a custom home tailored to your lifestyle</motion.p>  


<Btn name="TO ORDER" icon='arrow' />

<motion.div className="flex flex-row gap-15 relative h-fit">

<IconText main="Durability"  sub="Exclusive 10 years
      warranty" type="award"/>


<IconText main="Modern Interior" sub="Exclusive 10 years
      warranty" type="chair" />





</motion.div>




     </motion.div> 
  )
}
