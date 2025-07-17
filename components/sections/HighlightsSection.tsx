import React from 'react'
import Title from '@/components/Title'
import Highlights from '@/components/Highlights'

export default function HighlightsSection() {
  return (
 <div className='flex lg:flex-row flex-col w-full  bg-[url("/images/bg.jpg")] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20'>
 
 
 
 <Title title={<>Architect with <br/> different approach</>} />
 
 <div className="md:flex grid grid-cols-2 grid-rows-2   flex-row items-center   w-full gap-20 justify-center">
 <Highlights  figure={10} name="Awards gained" cls="row-start-1" />
 <hr  className='w-1 h-12 bg-gray-500 opacity-15 md:flex hidden'/>
 <Highlights  figure={315} name="Happy customers"  cls='col-start-2' />
 <hr  className='w-1 h-12 bg-gray-500 opacity-15 md:flex hidden'/>
 <Highlights  figure={17} name="Years Experience" cls='row-start-2' />
 <hr  className='w-1 h-12 bg-gray-500 opacity-15 md:flex hidden'/>
 <Highlights  figure={95} name="undergo training" cls='row-start-2 col-start-2 ' />
 
 </div>


 
 
 </div>
  )
}
