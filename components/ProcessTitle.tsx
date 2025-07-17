import React from 'react'



interface Proptype{

title:string,
number:string,
classes?:string,

}

export default function ProcessTitle({title,number,classes="flex"}:Proptype) {
  return (
    <div className={` relative w-32 items-center justify-center  ${classes} ` }>

<h1 className='font-mybold text-prim'> {title}</h1>
<p className='font-myblack text-5xl opacity-10  absolute -right-9'>{number}</p>

</div>
  )
}
