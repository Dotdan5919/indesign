'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Header_2 from '@/components/sections/Header_2';
import ProductBody from '@/components/sections/ProductBody';
import ClientProviders from '@/contexts/ClientProviders';
import useShop from '@/hooks/useShop';
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {


    const searchParams=useSearchParams();

    const value=searchParams.get('id') ;

  const convertedValue=parseInt(value,10);
    
    

  return (
    <ClientProviders>
   <div className="h-fit w-screen flex flex-col   gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">
      <Navbar/>
      <ProductBody value={convertedValue}/>

      
      
</div>
      <Footer/>
      
    
    </ClientProviders>
  )
}
