import React from 'react'
import ContactFormInput from './ContactFormInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faForward, faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons'

export default function RightSideForm() {
  return (
   <form className="bg-gray-100 grid grid-cols-2 md:w-[70%] w-full px-8 py-12 gap-4">
    <ContactFormInput name='First Name' type='text' />
    <ContactFormInput name='Last Name' type='text' />
    <ContactFormInput name='Email' type='email' />
    <ContactFormInput name='Address' type='address' />
    <ContactFormInput name='Message' type='message' extraClass='col-span-2 row-start-3 col-start-1' />

<button type='submit' className="flex w-10 h-10 hover:scale-110 duration-200 bg-prim rounded-full items-center justify-center row-start-3 col-start-2 justify-self-end ">

<FontAwesomeIcon icon={faPaperPlane} className='text-white' />
</button>





    </form>
  )
}
