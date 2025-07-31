'use client'
import React from 'react'
import Header from '@/components/sections/Header'

import useBlog from '@/hooks/useBlog'



import BlogLeftHand from './BlogLeftHand'
import BlogRightHand from './BlogRightHand'

// Fix the type annotation
interface SingleBlogBodyProps {
    id: number
}

export default function SingleBlogBody({ id }: SingleBlogBodyProps) {
    const { BlogsArray } = useBlog();
    
    const blog = BlogsArray.find(item => item.id === id);
    
    if (!blog) {
        return <div>Blog not found</div>;
    }
 
    return (
        <div className='lg:pt-10  lg:px-32 p-8 gap-9 flex flex-col'>
            
            <Header title={blog.title} previous='blog' subtitle='' />
            
<hr className='w-20  border-prim border-2' />

    <div className="flex sm:flex-row flex-col w-full h-fit gap-8 pb-32  justify-between">


<BlogLeftHand/>

<BlogRightHand/>

</div>

          
        </div>
    )
}