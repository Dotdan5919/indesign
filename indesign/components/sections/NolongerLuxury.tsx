import React from 'react'
import Title from '../Title'

import ImgTitle from '../ImgTitle'
import Award from '@/icons/award-svgrepo-com.svg'
import Chair from '@/icons/modern-chair-svgrepo-com.svg'
import Group from '@/icons/group-of-users-svgrepo-com.svg'
import avartara from '@/images/Team/t7.jpg'
import avartarb from '@/images/Team/t3.jpg'



export default function NolongerLuxury() {
  return (
   <div className="flex md:flex-row flex-col gap-20 items-center justify-between lg:pt-14 lg:pb-4  lg:px-32 p-8 ">



<div className="flex flex-col gap-10 ">
<Title title={<>Designer Services <br/> are no longer luxury</>} />


<div className="flex flex-row gap-11">

<ImgTitle  img={avartara} name='Daniel Nikoison' position='Founder' description='foundatinally engaged in design since 2016  Daniel has more than 15 awards and more than 20 design awards' />
<ImgTitle  img={avartarb} name='Martin fletcher' position='Designer' description='foundatinally engaged in design since 2016  Daniel has more than 15 awards and more than 20 design awards' />

</div>
</div>

 <hr  className='w-1 h-20 bg-gray-500 opacity-15 md:flex hidden'/>


<div className="flex flex-col w-fit h-fit gap-8  items-start justify-end pt-4">
<p className='text-sm'>We are convinced  that using the service of <br/> architecture and designers <br/> in our time is not a luxury but  a 
  consious
</p>

<div className="grid grid-cols-2 grid-rows-2 gap-14 ">

<div className="flex flex-col gap-2">
<Award className="w-14  h-fit fill-prim"/>
<h1 className='font-bold text-black'>Durability</h1>
<p className=' text-black text-xs'>Exclusive 15 <br/> years warranty</p>
</div>



<div className="flex flex-col justify-center gap-2  col-start-2 row-start-1 row-span-2 h-full   ">
<Chair className="w-14  h-fit fill-prim"/>
<h1 className='font-bold text-black'>Modern Interior</h1>
<p className=' text-black text-xs'>Exclusive 15<br/> years warranty</p>
</div>

<div className="flex flex-col gap-2">
<Group className="w-14  h-fit fill-prim"/>
<h1 className='font-bold text-black'>Professional Team</h1>
<p className=' text-black text-xs'>Exclusive 15 <br/> years warranty</p>
</div>






</div>






</div>



</div>
  )
}
