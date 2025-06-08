import pets from '@/app/pet';
import React, { useState } from 'react';
import { Touchable, View } from 'react-native';
import SmallBtn from './SmallBtn';

export default function CategoryBtn() {

    const [category, setCategory]=useState();

    const handlePress=(x)=>{

setCategory(x.type);
console.log("pressed");

    }

     const uniquePets = pets.filter(
    (pet, index, self) =>
      index === self.findIndex(p => p.type === pet.type)
  );
  return (

    <View className='flex flex-row gap-5 '>
    
    {uniquePets.map((e)=>{

e.key
return(
<Touchable  onPress={console.log("pressed")}  >
<SmallBtn name={e.type} id={e.id} act={category}  />
</Touchable >


)

    })}
     

    </View>
  )
}