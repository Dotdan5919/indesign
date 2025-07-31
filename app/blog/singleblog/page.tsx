'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import SingleBlogBody from '@/components/sections/SingleBlogBody'
import ClientProviders from '@/contexts/ClientProviders'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function BlogBodyWithParams() {
  const search = useSearchParams();
  const id = search.get('id');
  const intValue = id ? parseInt(id, 10) : 0;
  return <SingleBlogBody id={intValue} />;
}

export default function SingleBlog() {
  return (
    <ClientProviders>
      <div className='h-fit w-screen overflow-hidden'>
        <div className="flex flex-col w-full gap-16 bg-[url('/images/bg.jpg')] h-fit lg:pt-10 lg:px-32 p-8 ">
          <Navbar/>
        </div>
        <React.Suspense>
          <BlogBodyWithParams />
        </React.Suspense>

        <Footer/>
      </div>
    </ClientProviders>
  );
}
