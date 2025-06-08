import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function SmallBtn({name,act}) {
//  const [active,setActive]:boolean=useState(act);





  return (
    <TouchableOpacity  className={name===act ? ('flex items-center justify-center rounded-lg bg-red-950  p-3') : ('flex items-center justify-center rounded-lg bg-gray-200  p-3')  }  >
      <Text className={name===act ? ('font-bold text-white'):('font-bold text-black')}>{name}</Text>
    </TouchableOpacity>
  )
}