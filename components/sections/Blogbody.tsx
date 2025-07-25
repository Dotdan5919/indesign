'use client'
import React from 'react'
import Blogbox from '../Blogbox'
import useBlog from '@/hooks/useBlog'

export default function Blogbody() {

const{BlogsArray}=useBlog();

console.log(BlogsArray);

  return (
    <div className='grid grid-rows-1 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full   items-center justify-center'>
    
    
    
    {BlogsArray?.map((blog,index)=>{
    
    
    return(
    
        <Blogbox id={blog.id} key={index} img={blog.img}  date={blog.date} title={blog.title} description={blog.description} category={blog.cartegory} />
    )
    
    
    })}
    
    
     
        </div>
  )
}
