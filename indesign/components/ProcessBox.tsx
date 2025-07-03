import React from 'react'
import CircleLine from './CircleLine'
import CircleLineRev from './CircleLineRev'



interface PropType{title:string,text:string,number:string,rev:boolean}

export default function ProcessBox({title,text,number,rev}:PropType) {
  return (
    <div className={rev?"flex items-end  " :"flex items-end border-b-gray border-b-1  "}> 

   {rev? <CircleLineRev/> :  <CircleLine/>   }  

    <div className="flex items-end px-4 py-8">
    <div className="flex flex-col">  
<h1 className='font-mybold'>{title}</h1>

<p className='w-60'>{text}</p>
</div>

<h1 className="font-myblack text-prim">{number}</h1>

</div>




</div>
  )
}
