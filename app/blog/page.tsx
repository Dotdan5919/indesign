
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import ClientProviders from '@/contexts/ClientProviders'
import React from 'react'
import blog_img from '@/images/5.jpg'
import Blogbox from '@/components/Blogbox'
import Title from '@/components/Title'
import img_1 from '@/images/6.jpg'
import img_2 from '@/images/3.jpg'
import img_3 from '@/images/4.jpg'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowLeft } from 'lucide-react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { StaticImageData } from 'next/image'
import useBlog from '@/hooks/useBlog'
import Blogbody from '@/components/sections/Blogbody'


interface BlogTypes{

id:number,
    img:StaticImageData,
    date:string,
    title:string,
    description:any,
    cartegory:string
}

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
