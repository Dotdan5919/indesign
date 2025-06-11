import pets from '@/app/pet';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import SmallBtn from './SmallBtn';

export default function CategoryBtn() {

    const [category, setCategory]=useState();

    const handlePress=(e)=>{

setCategory(e.type);


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
<TouchableOpacity  onPress={()=>handlePress(e)}  >
<SmallBtn name={e.type} id={e.id} act={category}  />
</TouchableOpacity >


)

    })}
     

    </View>
  )
}