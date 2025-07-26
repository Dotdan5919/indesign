import React from 'react'

export default function Tags() {
  return (
   <div className="flex shadow-md w-full items-center justify-center bg-white p-4 flex-col">

<h1 className='w-full'>Tags</h1> 

<div className="grid grid-cols-2 gap-2 w-full p-2 text-xs     ">
<div className="flex items-center bg-gray-100 p-2 w-fit rounded-2xl">Design</div>
<div className="flex items-center bg-gray-100 p-2 w-fit rounded-2xl">Interior Design</div>
<div className="flex items-center bg-gray-100 p-2 w-fit rounded-2xl">Architecture</div>
<div className="flex items-center bg-gray-100 p-2 w-fit rounded-2xl">Commercial</div>
<div className="flex items-center bg-gray-100 p-2 w-full rounded-2xl">Home Interior</div>


</div>

</div>
  )
}
