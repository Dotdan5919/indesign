
import Image from 'next/image'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StaticImageData } from 'next/image';

interface PropType{

name:string,
title:string,
description:string,
rating:number,
img:StaticImageData,


}

export default function TestimonialBox({name,title,description,rating,img}:PropType) {
  return (
    <div className='w-96 min-h-88 h-fit shadow-lg p-7 flex flex-col gap-5 bg-white '>

        <div className="flex flex-row gap-2 items-center">

<div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full"> 
<Image src={img} className='w-10 h-fit' alt="image" />

</div>
<div className="flex flex-col items-start justify-center p-2 ">
<h1 className='font-bold text-sm'>{name}</h1>
<p className='text-sm'>{title}</p>
</div>

        </div>



        <p className="text-[13px] leading-6 ">{description}</p>
      
      <div className="flex flex-row text-sm gap-1">
            
            {Array.from({length:rating}).map((_,index)=>(

<FontAwesomeIcon key={index} icon={faStar} className={index<rating?'text-prim' : 'text-gray-300'} />

            ))}

</div>


    </div>
  )
}
