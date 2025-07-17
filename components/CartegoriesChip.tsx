import useShop from '@/hooks/useShop';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


type PropType={title:string};
export default function CartegoriesChip({title}:PropType) {

          const { Novelties,Discounted,setNovelties,setDiscounted}=useShop();

          
  

          

            const handlePress=()=>{
if (title==="Novelties"){

              setNovelties(!Novelties);

}


          else if(title==="Discounted"){

              setDiscounted(!Discounted);

            }
          }
         
  

          


  return (
       <div className="flex items-center justify-center gap-2 w-fit bg-prim rounded-full  p-4">
    <h1 className=' text-white'>{title}</h1>


<div className="flex rounded-full bg-white text-prim p-2">
  <FontAwesomeIcon icon={faClose} onClick={handlePress}/> 
   


    

</div>
      </div>
  )
}
