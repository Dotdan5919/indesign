'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';

import ProductBody from '@/components/sections/ProductBody';
import ClientProviders from '@/contexts/ClientProviders';

import { useSearchParams } from 'next/navigation'
import React from 'react'


function Productparams() {
  const search = useSearchParams();
  const id = search.get('id');
  const intValue = id ? parseInt(id, 10) : 0;
  return <ProductBody value={intValue} />;
}

export default function ProductPage() {


   


    
    

  return (
    <ClientProviders>
   <div className="h-fit w-screen flex flex-col   gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">
      <Navbar/>
   
      <React.Suspense>
        <Productparams />
      </React.Suspense>

      
      
</div>
      <Footer/>
      
    
    </ClientProviders>
  )
}
