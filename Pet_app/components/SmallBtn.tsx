import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function SmallBtn({name}) {
 const [active,setActive]:boolean=useState(false);


const handlePress =()=>
{

setActive(!active);



}


  return (
    <TouchableOpacity  className={active ? ('flex items-center justify-center rounded-lg bg-red-950  p-3') : ('flex items-center justify-center rounded-lg bg-gray-200  p-3')  } onPress={handlePress} >
      <Text className={active ? ('font-bold text-white'):('font-bold text-black')}>{name}</Text>
    </TouchableOpacity>
  )
}