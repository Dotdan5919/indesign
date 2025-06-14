import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import MiniCards from '@/components/MiniCards';
import MyBtn from '@/components/MyBtn';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useGlobalContext } from '@/context/Globalprovider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import pets from '../pet';

export default function _layout() {

  const {pet} = useLocalSearchParams();
  const convPet= parseInt(pet);
  const [favColor,setFavColor]=useState('');
  const {favourite,setFavourite}=useGlobalContext();

 


  const route =useRouter();

  const handlePress=()=>
  {
    route.push("/home");


  }

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



 
  
  const Pet=pets.filter(p=>p.id===convPet);


  useEffect(()=>
  
  
  {
  if(favourite.includes(convPet))

    {

setFavColor("pink");


    }

    else {

setFavColor("black");



    }

  })


  return (
    <View className='flex items-center justify-center w-full h-full'>

  
     {Pet.map((e)=>

     {
      return (

        <View key={e.id} className='w-full h-full bg-red-300 flex flex-col items-center  '>


 
          <View className='w-full h-2/5 flex items-center justify-center relative pt-4 '> 

          <View className='flex flex-row  justify-between w-full px-7  pt-32'> 
          <TouchableOpacity onPress={handlePress}  className='w-20 h-20 flex items-center justify-center bg-white shadow-md rounded-full'> 
        <Image source={icons.arrow} resizeMode='contain' className=' z-30 w-6 h-6 -rotate-90'  />
          </TouchableOpacity>


          <TouchableOpacity className='w-20 h-20 flex items-center justify-center bg-white shadow-md rounded-full' onPress={()=>handleHeart(e.id)}> 
        <Image source={icons.heart} resizeMode='contain' className=' z-30 w-6 h-6 ' tintColor={favColor}  />
          </TouchableOpacity>

          </View>
          <Image  source={e.image} resizeMode='contain' className=' w-96 h-96 z-10'/>




    <View className='w-96 h-96 bg-white -z-2 opacity-30 rounded-full  absolute top-2 '></View>      
</View>


<View className='bg-white w-[700px] h-full rounded-full flex items-center justify-center gap-5'> 

<View className='h-full w-96  pt-16  flex flex-col  gap-4'> 
        <Text className='text-[36px] font-bold'>{e.name}</Text>
        <View className='flex flex-row'>
            <Image source={images.loc} resizeMode='contain' className='w-7 h-7' tintColor="pink" />
              <Text>{e.location}</Text>
              </View>

<View className='flex flex-row gap-3 w-32'>
  <MiniCards figure={e.age} name="Age" color="1"/>
  <MiniCards figure={e.weight} name="Weight" color="2"/>
  <MiniCards figure={e.type} name=".." color="3"/>
  <MiniCards figure={e.sex} name="Sex" color="4"/>


  </View>

  <Text className='text-[22px] font-bold'>About {e.name} </Text>

<Text className='text-[18px] w-full text-justify '>{e.about}</Text>

<View className='flex w-full items-center justify-center'> 
  <Text>{}</Text>
<MyBtn name="Adopt" page="/home"/>

</View>
</View>


        </View>

</View>

      )


     }

     )}

      
    </View>
  )
}