import React from 'react'
import Navbar from '../Navbar'
import Heroleft from '../Heroleft'
import Heroright from '../Heroright'
import FavouriteProvider from '@/contexts/FavouriteContext'


export default function CompleteHero() {
  return (
     <div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20 " >
     <FavouriteProvider>
      <Navbar/>
</FavouriteProvider>
<div className="flex md:flex-row flex-col items-center justify-between gap-10  w-full  h-fit overflow-hidden  ">
<Heroleft/>

<Heroright/>

</div>


</div>
  )
}
