import { faArrowRight, faClose, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartegoriesChip from '../CartegoriesChip'
import Btn from '../Btn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import chair_1 from '@/images/chairs/chair_1.png'
import chair_2 from '@/images/chairs/1@0.33x.png'
import chair_3 from '@/images/chairs/3@0.33x.png'
import chair_4 from '@/images/chairs/4.png'
import ShopCard from '../ShopCard'

export default function CatalogRightHand() {


    const allProducts=[

{price:100,img:chair_1,title:"Modern Chair",categories:"Chairs"},
{price:200,img:chair_2,title:"Modern Chair",categories:"Chairs"},
{price:400,img:chair_4,title:"Modern Chair",categories:"Chairs"},
{price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs"},




    ]





   



  return (
    <div className='flex flex-col gap-8 '>
      
<div className="flex w-full gap-2 px-4">

<CartegoriesChip title='Novelties'/>
   <CartegoriesChip title='Discounted'/>
</div>
   
<div className="grid grid-cols-3 gap-10">


{allProducts.map((product,index)=>{

return(


<ShopCard key={index} newproduct={true} price={product.price}  img={product.img} title={product.title} category={product.categories}/>

)


})}

</div>






    </div>
  )
}
