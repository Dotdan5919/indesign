import { faArrowRight, faClose, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartegoriesChip from '../CartegoriesChip'
import Btn from '../Btn'
import { ArrowRight } from 'lucide-react'

export default function CatalogRightHand() {
  return (
    <div className='flex flex-col gap-8'>
      
<div className="flex w-full gap-2 px-4">

<CartegoriesChip title='Novelties'/>
   <CartegoriesChip title='Discounted'/>
</div>
   
<div className="flex flex-col shadow-md rounded-md w-80 p-9">

<div className="flex w-full justify-between items-center">

<FontAwesomeIcon icon={faHeart}/>
<div className="flex bg-prim px-3  py-2 text-white">New</div>




</div>












<div className="flex bg-gray-200 p-5 justify-between items-center rounded-2xl">

view details




<div className="flex items-center justify-center  relative">
    <p className='pr-2 '>
$243

</p>

<div className="flex p-2 bg-white text-prim shadow-sm rounded-full absolute left-12 hover:scale-110 transition-all duration-100 ">

<FontAwesomeIcon icon={faArrowRight} />
</div>

</div>
</div>




</div>





    </div>
  )
}
