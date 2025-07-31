'use client'
import React from 'react'
import Title from '../Title'
import img_1 from '@/images/6.jpg'
import img_2 from '@/images/3.jpg'
import img_3 from '@/images/4.jpg'


import Blogbox from '../Blogbox'

import { motion } from "motion/react"

export default function OurBlog() {
  return (
    <div className='flex mt-24 flex-col pt-4 w-full  bg-white  justify-start   p-8 pb-20 gap-9 sm:p-20 sm:px-32'>


   <Title title='our Blog and News' />


   <motion.div initial={{y:40}} transition={{duration:.5}} whileInView={{y:0}} className="grid grid-rows-1 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full  items-center justify-center">

    


<Blogbox id={1} img={img_1} date='July, 21 2020' title='Types of homes'
 description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem <br/> quidem labore itaque sit nostrum, m officia!</>}
category='Interior design' />


<Blogbox id={2} img={img_3} date='July, 21 2020' title='Purchase furniture'
 description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem <br/> quidem labore itaque sit nostrum, m officia!</>}
category='Interior design' />

<Blogbox id={3} img={img_2} date='July, 21 2020' title='Kitchen design ideas'
 description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem <br/> quidem labore itaque sit nostrum, m officia!</>}
category='Interior design' />
    
    </motion.div>   



    </div>
  )
}
