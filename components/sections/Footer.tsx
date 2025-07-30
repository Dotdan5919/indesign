
import React from 'react'
import Link from 'next/link'
import FooterNewsletter from '../FooterNewsletter'
import FooterContact from '../FooterContact'
import FooterCategory from '../FooterCategory'
import FooterCompany from '../FooterCompany'

export default function Footer() {
  return (
    <div className='flex flex-col w-dvw text-white bg-prim  p-8 pb-20 gap-16 sm:p-20 sm:px-32'>


<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
    
<FooterNewsletter/>





<FooterContact/>




<FooterCategory/>

<FooterCompany/>









</div>

<hr className="w-full border-2 border-white opacity-10" />
<div className="flex flex-row w-full justify-between">

    <Link href="/" className="font-bold font-myblack hover:opacity-80 transition-opacity">
      In.design
    </Link>


<div className="flex flex-row gap-4 text-xs">
    <Link href="#" className="hover:opacity-80 transition-opacity">
      Privacy Policy
    </Link>
    <Link href="#" className="hover:opacity-80 transition-opacity">
      Terms and conditions
    </Link>
</div>


</div>


      
    </div>
  )
}
