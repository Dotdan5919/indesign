import React from 'react'
import Btn from '../Btn'

import Tags from '../Tags'
import Popularblogs from '../Popularblogs'

export default function BlogLeftHand() {
  return (
   

<div className="flex sm:w-[40%] md:w-[22%] w-full flex-col gap-8 pt-20">
     <div className="flex flex-row">
      <input type="text" className=' px-8 py-4 w-full  bg-white  shadow-xl ' placeholder='Search '   />
      <Btn icon='search'  />

      
      
      </div>  



<Tags/>

<Popularblogs/>
<h1 className='font-bold'>Newsletter</h1>
    
<div className="flex flex-row">
<input type="text" className=' px-8 py-4 w-full  bg-white  shadow-xl ' placeholder='Search '   />
<Btn icon='search'  />
      
</div> 
<p>Sign up to receive special offers</p>



   <div className="flex shadow-md w-full items-center justify-center bg-white p-4 flex-col gap-4">

<h1 className='w-full font-bold'>Archives</h1> 

<div className="flex flex-col w-full text-sm text-gray-400">


<div className="flex w-full  ">
<h1 className='w-full'>July 2025 </h1> <span>(20)</span>
</div>
<div className="flex w-full  ">
<h1 className='w-full'>August 2025 </h1> <span>(20)</span>
</div>
<div className="flex w-full  ">
<h1 className='w-full'>September 2025 </h1> <span>(20)</span>
</div>


</div>



</div>




      </div>
  
  )
}
