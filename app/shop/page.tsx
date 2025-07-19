import Navbar from '@/components/Navbar'
import Header from '@/components/sections/Header'
import React from 'react'
import img_2 from '@/images/9.jpg'
import ImgSliderContainer from '@/components/ImgSliderContainer'

import img_3 from '@/images/3.jpg'
import ImgSliderContainer2 from '@/components/ImgSliderContainer2'
import Footer from '@/components/sections/Footer'
import FavouriteProvider from '@/contexts/FavouriteContext'
import ShoppingProvider from '@/contexts/ShoppingContext'
import ClientProviders from '@/contexts/ClientProviders'

export default function page() {

  
  return (
    <ClientProviders>
 
    <div>
<div  className='h-fit w-screen overflow-hidden flex flex-col   gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20'>
   
        <Navbar/>
       

<Header title='Our Shop' subtitle={`In our Store you can buy the  missing item in the room`} />



<hr className='w-20  border-prim border-2' />


<div className="md:flex grid sm:grid-cols-2  grid-cols-1  w-full gap-5 py-36">
<ImgSliderContainer2 img={img_3} name='Chairs' subtitle={'23 products'} hoverProp={true}/>
<ImgSliderContainer2 img={img_3} name='Recliners' subtitle={'23 products'} hoverProp={true}/>
<ImgSliderContainer2 img={img_3} name='Tables' subtitle={'23 products'} hoverProp={true}/>

<ImgSliderContainer2 img={img_3} name='Beds' subtitle={'23 products'} hoverProp={true}/>

</div>


</div>




<Footer/>

      





    </div>
</ClientProviders>
  )
}
