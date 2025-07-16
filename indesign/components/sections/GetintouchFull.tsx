import React from 'react'
import Title from '../Title'
import Btn from '../Btn'
import Image from 'next/image'

import img_3 from '@/images/12.jpg'

export default function GetintouchFull() {
  return (
   <div className='flex flex-col w-full  bg-white h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20 relative '>

     <div className="flex flex-col lg:w-3/5 gap-16 shadow-2xl p-14 rounded-md z-50 bg-white">
<Title title={<>Get a free consultation <br /> Just leave a request below</>} />

<div className="flex flex-row w-full gap-8  ">

<input type="text" className=' px-8 py-4 w-1/2 bg-white  shadow-xl ' placeholder='text' />

<Btn name="Call back" icon='arrow' />


</div>



</div>

<Image   src={img_3} alt='image' className='absolute -top-20 right-70 w-[500px] z-0 lg:flex  hidden' />



</div>
  )
}
