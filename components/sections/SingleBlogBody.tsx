'use client'
import React from 'react'
import Header from '@/components/sections/Header'
import Header_2 from './Header_2'
import useBlog from '@/hooks/useBlog'
import Btn from '@/indesign/components/Btn'

// Fix the type annotation
interface SingleBlogBodyProps {
    id: number
}

export default function SingleBlogBody({ id }: SingleBlogBodyProps) {
    const { BlogsArray } = useBlog();
    
    const blog = BlogsArray.find(item => item.id === id);
    
    console.log(BlogsArray);
 
    return (
        <div className='lg:pt-10  lg:px-32 p-8 gap-9 flex flex-col'>
            
            <Header title={blog.title} previous='blog' subtitle='' />
            
<hr className='w-20  border-prim border-2' />

<div className="flex sm:flex-row flex-col w-full h-fit gap-8 pb-32">

<div className="flex sm:w-[40%] md:w-[22%] w-full flex-col gap-8 pt-20">
     <div className="flex flex-row">
      <input type="text" className=' px-8 py-4 w-full  bg-white  shadow-xl ' placeholder='Search '   />
      <Btn icon='search'  />
      
      </div>  

<div className="flex shadow-md w-full bg-white p-8 flex-col">

<h1 className='w-full'>Tags</h1> 

<div className="flex">
<div className="flex bg-gray-100 px-4 py-2 w-fit rounded-2xl">hi</div>
<div className="flex bg-gray-100 px-4 py-2 w-fit rounded-2xl">hi</div>
<div className="flex bg-gray-100 px-4 py-2 w-fit rounded-2xl">hi</div>
..
</div>

</div>




      </div>
</div>

          
        </div>
    )
}