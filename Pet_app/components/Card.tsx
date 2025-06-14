import icons from '@/constants/icons';
import images from '@/constants/images';
import { useGlobalContext } from '@/context/Globalprovider';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface CardProp{
name:string;
img:ImageSourcePropType;
location:string;
isActive:boolean;
id:string;
}




export default function Card({name,img,location,isActive,id}:CardProp) {
  

  const router= useRouter()

   const {favourite,setFavourite}=useGlobalContext();
   const [favColor,setFavColor]=useState('');


     const handleHeart=(e)=>
  {

// favColor ==="black"?setFavColor("pink"):setFavColor("black");

if(favourite.includes(e))
{


  setFavourite(favourite.filter(fav => fav !== e));
  

 
}

else{



setFavourite([...favourite,e]);
 
}

    
  }

   useEffect(()=>
    
    
    {
    if(favourite.includes(id))
  
      {
  
  setFavColor("pink");
  
  
      }
  
      else {
  
  setFavColor("black");
  
  
  
      }
  
    })
    

  const handlePress = ( )=>
  {

    const link='/pet/'+id;

    router.push(link);


  }
  
  
  
  return (
    <TouchableOpacity  activeOpacity={.9} onPress={handlePress} >

<View  className={
    isActive ?
    'bg-slate-800  w-60  rounded-3xl h-60 mt-4 p-5 flex items-center justify-center relative   '
     : 'bg-red-200  w-60  rounded-3xl h-60 mt-4 p-5 flex items-center justify-center relative  '} >
<TouchableOpacity className='bg-white w-10 h-10 p-4 rounded-full top-4 left-5 flex items-center justify-center absolute '>
<Image source={icons.heart} resizeMode="contain" className='w-5 h-5  rounded-full  ' tintColor={favColor} />

</TouchableOpacity>
<Image source={img} resizeMode='contain' className='w-52 h-52 z-10 ' />

<View className='w-36 h-36  absolute bg-white  -top-2 rounded-full  -z-1 opacity-15'>

</View>

</View>


<View className='pl-2 flex gap-2'> 
      <Text className='font-bold text-[20px] mt-5'>{name}</Text>

<View className='flex flex-row'>
    <Image source={images.loc} resizeMode='contain' className='w-7 h-7' tintColor="pink" />
      <Text>{location}</Text>
      </View>
      </View>
    </TouchableOpacity >
  )
}