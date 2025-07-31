'use client'

import React, { useRef, useState } from 'react'
import img1 from '@/images/1.jpg'
import img2 from '@/images/2.jpg'
import img3 from '@/images/3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ImgSliderContainer from './ImgSliderContainer'

import {motion} from "motion/react"

export default function Heroright() {
  const [slider, setSlider] = useState(1);
  const divRef = useRef<HTMLDivElement>(null);

  const handlePress = (x: string) => {
    const scrollContainer = divRef.current;

    if (!scrollContainer) return;

    const scrollAmount = 430;

    if (x === "left" && slider >= 1) {
      setSlider(slider - 1);
      console.log(slider);
      scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else if (x === "right" && slider <= scrollContainer.children.length) {
      setSlider(slider + 1);
      scrollContainer.scrollBy({
        left: +scrollAmount,
        behavior: 'smooth',
      });
    }

    console.log(slider);
  }

  return (
    <motion.div className='h-full w-[520px] flex justify-center  lg:justify-end relative lg:items-center  '
     initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .4, ease: 'easeOut' }} >

        <div className=' bg-prim absolute w-44 h-44 p-3 -left-4 -top-30  hidden'> </div>

       <div className="flex relative justify-end  h-fit">
      <div className="grid grid-rows-1 grid-flow-col gap-2 w-[420px] overflow-hidden" ref={divRef}>
<ImgSliderContainer img={img1} />
<ImgSliderContainer img={img2} />
<ImgSliderContainer img={img3} />

</div>

  <div className="flex w-40 h-32 flex-row  z-20 absolute  justify-end items-end bottom-0 right-0 ">

<FontAwesomeIcon icon={faAngleLeft}  className={slider>1?('flex items-center justify-center bg-prim p-4 text-white hover:opacity-90 hover:shadow-sm'):('flex items-center justify-center bg-gray-300 p-4 text-black hover:opacity-90 hover:shadow-sm')}  onClick={()=>handlePress("left")}/>

<FontAwesomeIcon icon={faAngleRight} className={`flex items-center justify-center p-4 ${
      divRef.current && slider >= divRef.current.children.length
        ? 'bg-gray-300 text-black'
        : 'bg-prim text-white'
    } hover:opacity-90 hover:shadow-sm cursor-pointer`}  onClick={()=>handlePress("right")}  />

</div>

</div>

    </motion.div>
  )
}
