import React from 'react';
import { Text, View } from 'react-native';



interface minCard{

figure?:any,
name:string,
color:string

}
export default function MiniCards({figure,name,color}:minCard) {

    let colour;
switch(color)
{
 case "1":
    
colour='flex bg-red-100 rounded-xl w-24 h-24 p-5 items-center justify-center';
break;
case "2":
colour='flex bg-blue-100 rounded-xl w-24 h-24 p-5 items-center justify-center';
break;
case "3":
    colour='flex bg-gray-100 rounded-xl w-24 h-24 p-5 items-center justify-center';
break;
    case "4":
        colour='flex bg-orange-100 rounded-xl w-24 h-24 p-5 items-center justify-center';
break;
        default:

        


}



  return (
   <View className={colour}>
   <Text className='font-bold text-[22px]'>{figure}</Text>
   <Text className='text-[15px]'>{name}</Text>
       </View>
  )
}