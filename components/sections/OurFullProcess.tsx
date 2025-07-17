import React from 'react'
import Title from '../Title'
import ProcessTitle from '../ProcessTitle'
import OurProcessone from './OurProcessone'
import OurProcesstwo from './OurProcesstwo'
import OurProcessthree from './OurProcessthree'

export default function OurFullProcess() {
  return (
   <div className="flex flex-col w-full  bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">  




<Title title='Our Process make your dream true'/>



<div className="md:flex hidden justify-between w-full">
<ProcessTitle title='Architecture development' number='01.' />

<ProcessTitle title='Interior design' number='02.' />
<ProcessTitle title='Commercial Interior design' number='03.' />
</div>
<hr className='w-full border-slate-400 opacity-40 ' />
<div className="flex md:flex-row flex-col gap-8  w-full justify-between">
<ProcessTitle title='Architecture development' number='01.' classes={"md:hidden flex"} />
<OurProcessone/> 
<ProcessTitle title='Interior design' number='02.' classes={"md:hidden flex"} />
<OurProcesstwo/>
<ProcessTitle title='Commercial Interior design' number='03.' classes={"md:hidden flex"} />
<OurProcessthree/>

</div>










</div>
  )
}
