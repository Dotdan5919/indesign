'use client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import TItle from './Title'
import More from './More'
import { motion } from "motion/react"


type PropType={more:boolean}

export default function HistoryRight({more}:PropType) {
  return (
    <motion.div className="flex-col gap-8 flex sm:w-1/2"  
    initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}  >



<TItle title="History of our creation"/>
<p className=' leading-7'>
  Since our humble beginnings in 2006, We has significantly expanded its collection of exclusive lamps.
   Today we are proud to present you our best lighting design solutions.
Our collection is updated every day with beautiful solutions and we are glad that you, our customers, support us on way!
Our collection is updated every day with beautiful solutions


</p>

{more && <More text="Read more" arrowForward={true}/>}

</motion.div>
  )
}
