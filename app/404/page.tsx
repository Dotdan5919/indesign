'use client'
import Btn from '@/components/Btn'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import ClientProviders from '@/contexts/ClientProviders'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {


    const router=useRouter();


    const handleClick=()=>{

router.push('/')


    }
  return (

      <ClientProviders>
    <div className='h-fit w-screen overflow-hidden '>

<div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit  gap-16 lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20">
        <Navbar/>

</div>

<div className="flex w-full lg:pt-10 lg:pb-20  lg:px-32 p-8 pb-20 justify-center">


<div className="flex flex-col gap-3 ">
    <h1 className='text-9xl font-bold'>404</h1>
    <p>Something has happened...</p>
    <Btn name="Go Home" click={handleClick} icon='back' />
    </div>

</div>..




<Footer/>


</div>




   </ClientProviders>
  )
}
