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

        const {activeCategories,setActiveCategory,priceRange,setPriceRange, Novelties,Discounted}=useShop();


    const allProducts:Product[]=[

{price:100,img:chair_1,title:"Modern Chair",categories:"Chairs",novelties:false,discounted:false},
{price:200,img:chair_2,title:"Modern Chair",categories:"Chairs",novelties:false,discounted:false},
{price:400,img:recliner_1,title:"Modern Chair",categories:"Recliners",novelties:false,discounted:true},
{price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:true,discounted:false},
{price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:false,discounted:false},
{price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:false,discounted:false},
{price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:false,discounted:true},
{price:230,img:chair_3,title:"Modern Shoe",categories:"Table",novelties:true,discounted:false},


    ]


     const [shownProducts, setShownProducts] = useState<Product[]>(allProducts); 
    
     
    
     
     useEffect(()=>{
        let shownProduct=allProducts;

 if(activeCategories!=null){

        shownProduct=shownProduct.filter(item=>item.categories===activeCategories);
      
    }

    if(Novelties===true){

        shownProduct=shownProduct.filter(items=>items.novelties===true);
        

    }
    if(Discounted===true)
    {

        shownProduct=shownProduct.filter(items=>items.discounted===true);
       

    }

    if(priceRange && (priceRange[0]>0 || priceRange[1]<100)){


        shownProduct=shownProduct.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
        
    }
   


setShownProducts(shownProduct);


    },[activeCategories,Novelties,priceRange,Discounted])
    



   



  return (
    <div className='flex flex-col gap-8 '>
      
<div className="flex w-full gap-2 px-4">
{Novelties && <CartegoriesChip title='Novelties'/>}
{Discounted && <CartegoriesChip title='Discounted'/>}


   
</div>
   
<div className="grid grid-cols-3 gap-10">


{shownProducts.length>0 ? (shownProducts.map((product,index)=>{

return(


<ShopCard key={index} newproduct={true} price={product.price}  img={product.img} title={product.title} category={product.categories}/>

)


})):( <div className="col-span-full text-center text-gray-500">
            No products found matching your criteria.
          </div>)}

</div>






    </div>
  )
}
