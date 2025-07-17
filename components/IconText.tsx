import { faAward, faChair, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function IconText({main,sub,type}) {

    var iconType;

switch(type){

    case 'chair':
        iconType=faChair;
        break;
    case 'award':
        iconType=faAward;
        break;

    default:
        iconType=faCircle;
        break;




}



  return (
    <div className='flex gap-2 text-[40px] items-center justify-center'>
      <FontAwesomeIcon icon={iconType} className='text-prim' />

      <div className="flex flex-col gap-0.5">
      <h1 className='text-[20px]'> {main}</h1>
      <p className='text-[10px] w-28'>{sub}</p>
      </div>
    </div>
    
  )
}
