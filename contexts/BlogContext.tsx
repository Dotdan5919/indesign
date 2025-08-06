'use client'
import React, { createContext, ReactNode } from 'react'
import img_1 from '@/images/6.jpg'
import img_2 from '@/images/3.jpg'
import img_3 from '@/images/4.jpg'
import { StaticImageData } from 'next/image'



interface BlogTypes{    

id:number,
    img:StaticImageData,
    date:string,
    title:string,
    description:string,
    cartegory:string
}

interface BlogContext{

    BlogsArray:BlogTypes[]






}


interface BlogType{
children:ReactNode

}


export const BlogContext= createContext<BlogContext | null>(null);
export default function BlogProvider({children}:BlogType) {

 const Blogs=[

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



    const values={BlogsArray:Blogs || []}


  return (
    <BlogContext.Provider value={values}>

{children}
    </BlogContext.Provider>
      
    
  )
}
