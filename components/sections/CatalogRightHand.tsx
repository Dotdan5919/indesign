'use client'
import { faArrowRight, faClose, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import CartegoriesChip from '../CartegoriesChip'
import Btn from '../Btn'
import { ArrowRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import chair_1 from '@/images/chairs/chair_1.png'
import chair_2 from '@/images/chairs/1@0.33x.png'
import chair_3 from '@/images/chairs/3@0.33x.png'
import chair_4 from '@/images/chairs/4.png'
import recliner_1 from '@/images/chairs/8@0.33x.png'
import ShopCard from '../ShopCard'
import useShop from '@/hooks/useShop'
 

interface Product {

    price:number,
    img:StaticImageData,
    title:string,
    categories:string,
    novelties:boolean,
    discounted:boolean


}
export default function CatalogRightHand() {

        const { Novelties,Discounted,shownProducts}=useShop();



    
    
     
    
     
    
    



   



  return (
    <div className='flex flex-col gap-8 '>
      
<div className="flex w-full gap-2 px-4">
{Novelties && <CartegoriesChip title='Novelties'/>}
{Discounted && <CartegoriesChip title='Discounted'/>}


   
</div>
   
<div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-10">


{shownProducts.length>0 ? (shownProducts.map((product,index)=>{

return(


<ShopCard key={index} newproduct={true} price={product.price}  img={product.img} title={product.title} category={product.categories}/>

)


})):( <div className="col-span-full text-center text-gray-500 h-44 p-8 flex items-center justify-center">
            No products found matching your criteria.
          </div>)}

</div>






    </div>
  )
}
