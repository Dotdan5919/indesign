import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Btn({name}) {
  return (
   <button className='flex bg-prim gap-2 px-7 py-4 text-white items-center justify-center hover:shadow-xl'>
   {name}<FontAwesomeIcon icon={faArrowRight} /> </button>

    
   
  )
}
