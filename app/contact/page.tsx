import Navbar from '@/components/Navbar'
import Header from '@/components/sections/Header'
import React from 'react'
import img_new from '@/images/5.jpg'
import ClientProviders from '@/contexts/ClientProviders'
import Footer from '@/components/sections/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocation, faLocationPin, faMailBulk, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import LeftSideForm from '@/components/leftSideForm'
import RightSideForm from '@/components/RightSideForm'

export default function page() {
  return (
    <ClientProviders>
        <div className='h-fit w-screen overflow-hidden'>

<div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">  

      <Navbar/>

      <Header title='Contacts' subtitle='how to reach us' img={img_new}/>

</div>

<div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center  lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20 mt-32">

    <LeftSideForm/>

    <RightSideForm/>
</div>







<Footer/>

        </div>

    </ClientProviders>
  )
}
