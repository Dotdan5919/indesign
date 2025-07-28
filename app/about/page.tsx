
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

import React from 'react'

import AboutHistory from '@/components/sections/AboutHistory'
import HighlightsSection from '@/components/sections/HighlightsSection'



import NolongerLuxury from '@/components/sections/NolongerLuxury'
import Testimonial from '@/components/sections/Testimonial'

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
