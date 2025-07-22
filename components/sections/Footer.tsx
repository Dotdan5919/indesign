import { faBehance, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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

    <h1 className="font-bold font-myblack">In.design</h1>


<div className="flex flex-row gap-4 text-xs">
    <p className=""> Privacy Policy</p>
    <p className=""> Terms and conditions</p>
</div>


</div>


      
    </div>
  )
}
