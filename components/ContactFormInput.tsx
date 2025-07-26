import React from 'react'


type Proptype={name:string,type:string,extraClass?:string}
export default function ContactFormInput({name,type,extraClass}:Proptype) {
  return (
         <div className={`flex flex-col ${extraClass}  `}>
<label htmlFor={name} className='text-sm'>{name}</label>
<input type={type} name={name} className='border-b-prim border-t-0 border-x-0 outline-0 border-1 p-2' />
</div>
  )
}
