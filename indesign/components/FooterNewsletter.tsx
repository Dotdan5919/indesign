import { faBehance, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FooterNewsletter() {
  return (
    <div className="flex flex-col gap-8">

    <h1 className='font-bold'>Newsletter</h1>

    <div className="flex flex-row justify-between items-center p-4 max-w-60 outline-1 outline-white">


<input type='email' placeholder='Your Email' className='w-full outline-none' />

<FontAwesomeIcon icon={faArrowRight} className='text-white' />


    </div>
<p className='text-xs'>Signup to receive offers</p>

<div className="flex flex-row gap-2 text-xs">

<FontAwesomeIcon icon={faBehance} className='text-white bg-primdark p-3 rounded-sm shadow-lg w-fit h-fit'/>
<FontAwesomeIcon icon={faInstagram} className='text-white bg-primdark p-3 rounded-sm shadow-lg w-fit h-fit'/>
<FontAwesomeIcon icon={faFacebook} className='text-white bg-primdark p-3 rounded-sm shadow-lg w-fit h-fit'/>

</div>



</div>
  )
}
