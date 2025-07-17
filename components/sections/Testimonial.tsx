'use client'


import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import SliderNav from '../SliderNav'
import TestimonialBox from '../TestimonialBox'
import t1 from '@/images/Team/t-1.jpg'

export default function Testimonial() {




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
    <div className='flex flex-row pt-4 w-full h-fit items-center bg-white justify-center   p-8 pb-20 gap-8 md:p-20 md:px-32'>
      <div className="flex flex-col w-full items-start gap-11 justify-center pt-10">
      <Title title='Thanks for your sweet words to us' />

<div className="grid grid-rows-1 grid-flow-col gap-4 overflow-hidden w-[1400px]  " ref={divRef}>


<TestimonialBox name='Paul Wilbur' title='Ceo,Protech' description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias fugit explicabo delectus. Ut dolorum minus inventore ipsam ab, et consequuntur nobis harum omnis soluta nihil? Corrupti quas sit laborum.
Rem, accusantium animi ex similique sed, dignissimos accusamus praesentium "   rating={5} img={t1}/>

<TestimonialBox name='Paul Wilbur' title='Ceo,Protech' description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias fugit explicabo delectus. Ut dolorum minus inventore ipsam ab, et consequuntur nobis harum omnis soluta nihil? Corrupti quas sit laborum.
Rem, accusantium animi ex similique sed, dignissimos accusamus praesentium "   rating={5} img={t1}/>

<TestimonialBox name='Paul Wilbur' title='Ceo,Protech' description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias fugit explicabo delectus. Ut dolorum minus inventore ipsam ab, et consequuntur nobis harum omnis soluta nihil? Corrupti quas sit laborum.
Rem, accusantium animi ex similique sed, dignissimos accusamus praesentium "   rating={5} img={t1}/>

<TestimonialBox name='Paul Wilbur' title='Ceo,Protech' description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias fugit explicabo delectus. Ut dolorum minus inventore ipsam ab, et consequuntur nobis harum omnis soluta nihil? Corrupti quas sit laborum.
Rem, accusantium animi ex similique sed, dignissimos accusamus praesentium "   rating={5} img={t1}/>


<TestimonialBox name='Paul Wilbur' title='Ceo,Protech' description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias fugit explicabo delectus. Ut dolorum minus inventore ipsam ab, et consequuntur nobis harum omnis soluta nihil? Corrupti quas sit laborum.
Rem, accusantium animi ex similique sed, dignissimos accusamus praesentium "   rating={5} img={t1}/>

<TestimonialBox name='Paul Wilbur' title='Ceo,Protech' description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias fugit explicabo delectus. Ut dolorum minus inventore ipsam ab, et consequuntur nobis harum omnis soluta nihil? Corrupti quas sit laborum.
Rem, accusantium animi ex similique sed, dignissimos accusamus praesentium "   rating={5} img={t1}/>


</div>

 <div className="flex flex-row gap-2">
  <SliderNav direction='left' onClick={()=>handlePress('left')} disabled={slider === 0} />
<SliderNav direction='right' onClick={()=>handlePress('right')} disabled={ slider >= maxSlides} />
          
          </div>

      
</div>




    </div>
  )
}
