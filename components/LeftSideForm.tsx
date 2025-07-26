import { faLocation, faMailBulk, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LeftSideForm() {
  return (
    <div className="flex flex-col gap-5 justify-center bg-prim    p-8 text-white">
        <h1 className='text-2xl font-bold '>Contacts</h1>

        <div className="flex flex-col h-full  justify-evenly gap-4 w-full">


            <div className="flex gap-2 w-full">


                <FontAwesomeIcon icon={faLocation} className='text-white' />
               <p> 23, San Fransico, LA <br/>
                234B1 </p>
            </div>

             <div className="flex gap-2 w-full">

                <FontAwesomeIcon icon={faMailBulk} className='text-white' />
               <p className='flex'> dighodaro95@gmail.com </p>
            </div>
             <div className="flex gap-2 w-full">

                <FontAwesomeIcon icon={faMobilePhone} className='text-white' />
               <p> +234 456 345 </p>
            </div>


        </div>

    </div>
  )
}
