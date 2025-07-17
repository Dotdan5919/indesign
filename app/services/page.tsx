import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import React from 'react'
import img_2 from '@/images/9.jpg'
import img_3 from '@/images/12.jpg'
import Team from '@/components/sections/Team'
import Title from '@/components/Title'
import Image from 'next/image'

import More from '@/components/More'
import Card from '@/components/Card'
import SectionService from '@/components/sections/SectionService'
import ProcessTitle from '@/components/ProcessTitle'
import Dropdown from '@/components/Dropdown'
import OurProcessone from '@/components/sections/OurProcessone'
import OurProcesstwo from '@/components/sections/OurProcesstwo'
import OurProcessthree from '@/components/sections/OurProcessthree'
import OurFullProcess from '@/components/sections/OurFullProcess'
import Btn from '@/components/Btn'
import GetintouchFull from '@/components/sections/GetintouchFull'

export default function page() {
  return (
    <div className='h-fit w-screen overflow-hidden'>
      

   <div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">  

<Navbar/>


<Header title='Services' subtitle='Please review our services' img={img_2}/>
</div>

<div className="flex w-full h-40"></div>


<Team service={true}/>



<SectionService/>

 <OurFullProcess/>



<GetintouchFull/>
 








<Footer/>



    </div>
  )
}
