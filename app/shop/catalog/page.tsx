

import Navbar from '@/components/Navbar'
import Header from '@/components/sections/Header'
import React, { useEffect, useState } from 'react'
import img_2 from '@/images/9.jpg'
import ImgSliderContainer from '@/components/ImgSliderContainer'

import CatalogLeftHand from '@/components/sections/CatalogLeftHand'

import img_3 from '@/images/3.jpg'
import ImgSliderContainer2 from '@/components/ImgSliderContainer2'
import Footer from '@/components/sections/Footer'
import Btn from '@/components/Btn'
import CatalogRightHand from '@/components/sections/CatalogRightHand'
import useShop from '@/hooks/useShop'
import  ShoppingProvider from '@/contexts/ShoppingContext'
import FavouriteProvider from '@/contexts/FavouriteContext'



export default function page() {

  

















  return (
    <div>
<div  className='h-fit w-screen overflow-hidden flex flex-col   gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20'>
        <Navbar/>

<Header previous='Shop' title='Catalog' subtitle={`Select Appropriate option`} />

<hr className='w-20  border-prim border-2' />


<div className="flex sm:flex-row flex-col w-full h-fit gap-8 pb-32">

<ShoppingProvider>
{/* left hand side */}
<CatalogLeftHand/>

<FavouriteProvider>
<CatalogRightHand/>
</FavouriteProvider>
</ShoppingProvider>



</div>




</div>




<Footer/>

      





    </div>
  )
}
