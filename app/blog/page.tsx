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


interface BlogTypes{

id:number,
    img:StaticImageData,
    date:string,
    title:string,
    description:any,
    cartegory:string
}

export default function page() {

    const Blogs:BlogTypes[]=[

        {   id:1,
            img:img_1,
            date:'July, 21 2020',
            title:'Types of homes',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem  quidem labore itaque sit nostrum, m officia!',
            cartegory:'Interior design' },
                    {
                        id:2,
                        img:img_1,
            date:'July, 21 2020',
            title:'Types of homes',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem  quidem labore itaque sit nostrum, m officia!',
            cartegory:'Interior design' },
                    {
                        id:3,
                        img:img_3,
            date:'July, 21 2020',
            title:'Purchase furniture',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem  quidem labore itaque sit nostrum, m officia!',
            cartegory:'Interior design' },
                    {
                        id:4,
                        img:img_2,
            date:'July, 21 2020',
            title:'Types of homes',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem  quidem labore itaque sit nostrum, m officia!',
            cartegory:'Interior design' },
                    {   id:5,
                        img:img_1,
            date:'July, 21 2020',
            title:'Kitchen design ideas',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem  quidem labore itaque sit nostrum, m officia!',
            cartegory:'Interior design' },

    ]


  return (
    <ClientProviders>
    <div className='h-fit w-screen overflow-hidden '>

<div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">
        <Navbar/>
<Header title="Blog" subtitle='our Blogs and News' img={img_1}/>
</div>


<div className='flex flex-col gap-12 pt-64 lg:pb-20  lg:px-32 p-8 pb-20'>

  <Title title='our Blog and News' />


 
<div className='grid grid-rows-1 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full   items-center justify-center'>


{Blogs.map((blog,index)=>{


return(

    <Blogbox key={index} img={blog.img}  date={blog.date} title={blog.title} description={blog.description} category={blog.cartegory} />
)


})}


 
    </div>
    



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
