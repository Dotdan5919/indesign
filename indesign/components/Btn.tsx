import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Proptype{

name?:string,
icon?:string,
click?:()=>void

}

export default function Btn({name,icon,click}:Proptype) {
  return (
   <button className='flex bg-prim gap-2 px-7 py-4 text-white items-center justify-center hover:shadow-xl' onClick={click} >
    
   {name}
   
   {icon==="arrow" && (<FontAwesomeIcon icon={faArrowRight} /> )}
   {icon==="search" && (<FontAwesomeIcon icon={faSearch} /> )}


   
   
   </button>

    
   
  )
}
