

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
import ClientProviders from '@/contexts/ClientProviders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



export default function page() {

  

  














  return (
<ClientProviders>
    <div>
<div  className='h-fit w-screen overflow-hidden flex flex-col   gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20'>

        <Navbar/>

<Header previous='shop' title='Catalog' subtitle={`Select Appropriate option`} />

<hr className='w-20  border-prim border-2' />


<div className="flex sm:flex-row flex-col w-full h-fit gap-8 pb-32">
{/* importing the providers to only where they are needed */}

    <CatalogLeftHand/>


<div className="flex flex-col gap-4  justify-between">
    <CatalogRightHand/>



<div className="flex gap-3 text-sm cursor-default">
<p className='text-prim hover:scale-110 transition-all duration-200'>1</p>
<p className='hover:scale-110 transition-all duration-200'>2</p>

<p className='hover:scale-110 transition-all duration-200'>3</p>
<p className='hover:scale-110 transition-all duration-200'>4</p>

<p className='text-prim hover:scale-110 transition-all duration-200'>Next <FontAwesomeIcon icon={faArrowRight} /> </p>

</div>

</div>
</div>




</div>




<Footer/>

      





    </div>
</ClientProviders>
  )
}
