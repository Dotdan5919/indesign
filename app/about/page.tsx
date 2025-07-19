import HistoryLeft from '@/components/HistoryLeft'
import HistoryRight from '@/components/HistoryRight'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import imga from "@/images/section a.jpg"
import imgb from "@/images/section b.jpg"
import AboutHistory from '@/components/sections/AboutHistory'
import HighlightsSection from '@/components/sections/HighlightsSection'
import Title from '@/components/Title'

import avartara from '@/images/Team/t7.jpg'
import avartarb from '@/images/Team/t3.jpg'
import ImgTitle from '@/components/ImgTitle'
import Award from '@/icons/award-svgrepo-com.svg'
import Chair from '@/icons/modern-chair-svgrepo-com.svg'
import Group from '@/icons/group-of-users-svgrepo-com.svg'
import NolongerLuxury from '@/components/sections/NolongerLuxury'
import Testimonial from '@/components/sections/Testimonial'
import FavouriteProvider from '@/contexts/FavouriteContext'
import ClientProviders from '@/contexts/ClientProviders'



export default function page() {
  return (
      <ClientProviders>
    <div className="h-fit w-screen overflow-hidden" >


   <div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">  

<Navbar/>




<Header title='About us' subtitle='Our History' />




</div>



<AboutHistory/>

<HighlightsSection/>


<NolongerLuxury />




<Testimonial/>















<Footer/>



      
    </div>
      </ClientProviders>
  )
}
