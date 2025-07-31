
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import ClientProviders from '@/contexts/ClientProviders'
import React from 'react'

import Title from '@/components/Title'
import img_1 from '@/images/6.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Blogbody from '@/components/sections/Blogbody'


export default function page() {

   

    

  return (
    <ClientProviders>
    <div className='h-fit w-screen overflow-hidden '>

<div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">
        <Navbar/>
<Header title="Blog" subtitle='our Blogs and News' img={img_1}/>
</div>


<div className='flex flex-col gap-12 pt-64 lg:pb-20  lg:px-32 p-8 pb-20'>

  <Title title='our Blog and News' />


 
<Blogbody/>
    



    <div className="flex">

<FontAwesomeIcon icon={faArrowLeft} className='flex items-center justify-center bg-prim p-4 text-white hover:opacity-90 hover:shadow-sm' />
<FontAwesomeIcon icon={faArrowRight} className='flex items-center justify-center bg-gray-300 p-4 text-white hover:opacity-90 hover:shadow-sm' />


    </div>

    





</div>




    </div>
        <Footer/>
      

    </ClientProviders>
  )
}
