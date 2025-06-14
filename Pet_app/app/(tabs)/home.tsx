import Location from '@/components/Location'
import icons from '@/constants/icons'
import images from '@/constants/images'

import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Card from '@/components/Card'
import CategoryBtn from '@/components/CategoryBtn'
import SearchInput from '@/components/SearchInput'
import MyBtnWhite from '@/components/myBtnWhite'

import { useGlobalContext } from '@/context/Globalprovider'
import { useRouter } from 'expo-router'
import Pets from '../pet'

export default function home() {
const {category,setCategory}=useGlobalContext();


const route= useRouter();

const handlePress=()=>{



  route.push("/id");
}

// const {sortedPets,setSortedPets}=useState();

const sortedPets=category==="All"? Pets : Pets.filter(Pet=>Pet.type===category);


  return (

    <SafeAreaView className='w-full h-full flex justify-center items-center'>

<ScrollView>
<View className='w-full h-full flex gap-6 p-4'>

<View className='w-full flex flex-row items-center justify-between'> 
<View className='  h-20   '>
<Location icon={icons.arrow} name="Location"/>

<Text className='font-bold text-lg'>Dallas, Texas </Text>
   </View>


<View className='flex items-center justify-center bg-white  shadow-gray-500 shadow-sm rounded-full w-12 h-12 p-10 '>

<Image source={icons.notification_fill} resizeMode='contain' className='w-10 h-10' />

</View>


</View>


<View className='flex gap-2 flex-row items-center justify-between'>

<SearchInput/>

<Image source={icons.menu} resizeMode='contain' className='w-12 h-12  mt-5' />

</View>


<View className=' w-full h-56 bg-red-200 rounded-3xl flex flex-row items-center justify-between p-10'>

<View className='flex flex-col gap-4'>
  <View>
<Text className='text-white font-bold'>Help us give pets </Text>
<Text className='text-white font-bold'>a better future</Text>
</View>
<MyBtnWhite name="Donate" page="/chat" />

</View>
<Image source={images.bgTwo} className='w-44 h-44 ' resizeMode='contain'  />
</View>


<View className='mb-5'><Text className='font-bold text-[20px]'>Category</Text>

<View className='mt-5'>

<CategoryBtn/>


</View>


<ScrollView horizontal showsHorizontalScrollIndicator={false} >

<View className="flex-row gap-4 px-4"> 
{
  sortedPets.map((e)=>{


    return (
    <Card  key={e.id} name={e.name} img={e.image} location={e.location} isActive={false} id={e.id} />
)

  
  })

}

</View>
</ScrollView>

 </View>






</View>

</ScrollView>

    </SafeAreaView>
  )
}