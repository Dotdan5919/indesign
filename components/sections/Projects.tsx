'use client'

import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import More from '../More'

import Img1 from '@/images/6.jpg';
import Img2 from '@/images/3.jpg';
import Img3 from '@/images/2.jpg';
import Img5 from '@/images/5.jpg';
import Img4 from '@/images/1.jpg';

import ImgSliderContainer2 from '../ImgSliderContainer2'
import SliderNav from '../SliderNav'


export default function Projects() {


   const [slider, setSlider] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  

  const [scrollAmount, setScrollAmount] = useState(650);

     useEffect(() => {
    if (divRef.current) {
      setMaxSlides(divRef.current.children.length - 1);
    }

    const width = window.innerWidth;

    if (width < 640) {
      // Mobile
      setScrollAmount(300);
    } else if (width >= 640 && width < 1024) {
      // Tablet
      setScrollAmount(500);
    } else {
      // Desktop
      setScrollAmount(650);
    }
  }, []);

  const handlePress = (direction: 'left' | 'right') => {
    if (!divRef.current) return;

    if (direction === 'left' && slider > 0) {
      divRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setSlider(slider - 1);
    }

    if (direction === 'right' && slider < maxSlides) {
      divRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setSlider(slider + 1);
    }
  };


   


    
  return (
    <div className='flex md:flex-row flex-col pt-12 w-full h-fit items-center bg-[url("/images/bg.jpg")] justify-center z-0   px-8 gap-8  lg:p-20 lg:px-32 p-8 pb-20 ' >
      
      <div className="flex flex-col gap-12 lg:w-2/5">
<Title title='Our Latest Project'/>

<p className='w-full'> 
This is why we are proud to offer a wide<br/>
selection of our designer ceiling, wall, floor and table lamps.<br/>
You will also find products ranging from modern <br/>
styles, modern interpretations of classic design.<br/>
Our collection is updated every day with <br/>
beautiful solutions and we are glad that you, our customers



</p>

<div className="flex flex-row items-center justify-between w-full ">

<More text="View more" arrowForward={true} />




 <div className="flex flex-row gap-2">
  <SliderNav direction='left' onClick={()=>handlePress('left')} disabled={slider === 0} />
<SliderNav direction='right' onClick={()=>handlePress('right')} disabled={ slider >= maxSlides} />
          
          </div>
</div>







</div>

<div className="lg:w-2/4 " >


<div className="grid grid-rows-1 grid-flow-col lg:w-[850px] w-[420px] gap-4 overflow-hidden z-0" ref={divRef}>
<ImgSliderContainer2 img={Img1}  name="Living Room" subtitle={"59 projects"}  />
<ImgSliderContainer2 img={Img2}  name="Kitchen" subtitle={"75 projects"}   />
<ImgSliderContainer2 img={Img3}  name="Commercial" subtitle={"49 projects"}  />
<ImgSliderContainer2 img={Img5}  name="Studio" subtitle={"29 projects"}  />
<ImgSliderContainer2 img={Img4}   name="Work Station" subtitle={"59 projects"} />

</div>


    
</div>





    </div>
  )
}
