'use client'
import React, { useState } from 'react'
import Btn from '../Btn'
import { DualRangeSlider } from '../ui/DropRangeSlider';
import { Switch } from '@/components/ui/switch';



export default function ShopLeftHand() {

    const [activeCategories,setActiveCategory]=useState(0);
    const [values, setValues] = useState([0, 100]);

    
    const categories=[{name:"Chairs",number:25},
      {id:1,name:"Recliners",number:25},
      {id:2,name:"Tables",number:25},
      {id:3,name:"Beds",number:25},
      {id:4,name:"Chest",number:25},
      {id:5,name:"Shelves",number:25},
      {id:6,name:"Sofas",number:25},
    ];


    const handlePress=(index:number)=>{


  setActiveCategory(index);


}

  return (
  <div className="flex w-[30%] flex-col gap-8 pt-20">
  
    <div className="flex flex-row">
  <input type="text" className=' px-8 py-4 w-full  bg-white  shadow-xl ' placeholder='Search for prices' />
  <Btn icon='search' />
  
  </div>  
  
  
  
  <div className="flex shadow-xl bg-white px-8 py-8">
  
  <ul className='w-full flex flex-col gap-4 cursor-default'>
  
  {categories.map((e,index)=>{
  
  return(
    <ul key={index} className={`${index===activeCategories && ('text-prim')} hover:text-prim  flex w-full items-center  justify-between`} onClick={()=>handlePress(index)} >
      <div className="flex w-fit items-center gap-1">
      {index===activeCategories && (<hr className='bg-prim h-[2px] w-2'/>)}
  <li>{e.name}</li>
  </div>
  <li>({e.number})</li>
  </ul>
  
  )
  
  
  })}
  
   
  
  </ul>
  
  
  
  </div>
  
  
  <div className="flex shadow-xl bg-white px-8 py-8 flex-col justify-between gap-12 ">
  
  <h1>Price range</h1>
  
    <DualRangeSlider
        label={(value) => <span>${value}</span>}
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
      />

<div className="flex w-full justify-between">
<label htmlFor="novelties" >Novelties</label >
  <Switch id='novelties' />
  


</div>

<div className="flex w-full justify-between">
<label htmlFor="discounted">Discounted <br/> products</label>
  <Switch id='discounted' />
  


</div>

  
  </div>
  
  
  
  
  </div>
  )
}
