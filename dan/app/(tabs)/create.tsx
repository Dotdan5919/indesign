import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import MyInput from '@/components/MyInput'
import icons from '@/constants/icons'
import MyBtn from '@/components/MyBtn'
import { ScrollView } from 'react-native'

const Create = () => {
  return (
    <SafeAreaView  className='bg-slate-950  flex-col w-full h-full gap-1'>

<ScrollView 

showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
showsVerticalScrollIndicator={false} 
>
{/* container */}
<View className='my-12 flex gap-12 px-8 '>
{/* Video Title */}
      <View className="flex gap-4 w-full ">

      <Text className='text-white font-bold text-2xl  font-bold'>

        Upload Video
      </Text>

      <MyInput name="Video Title"  hideTitle={false} newstyles='' />

      </View>

{/* upload Video */}
      <View className='w-full  flex items-start gap-4 '>

        <Text className='text-white font-bold'>Upload Video</Text>
    <TouchableOpacity className='bg-slate-800 w-full h-[194px] flex justify-center items-center rounded-md'>

    <Image source={icons.upload} className='w-30 h-30' resizeMode="contain" />

    </TouchableOpacity>


      </View>


{/* Thumbain Images */}
      <View className='w-full  flex items-start gap-4  '>

<Text className='text-white font-bold'>Thumbnail Image</Text>
<TouchableOpacity className='bg-slate-800 w-full h-[58px] flex flex-row justify-center items-center rounded-md  p-4 '>

<Image source={icons.upload} className='w-30 h-30' resizeMode="contain" />
 <Text className='text-white'> Choose Image</Text>

</TouchableOpacity>


</View>



{/* Ai prompt */}


<MyInput name='AI Prompt' newstyles='' />



{/* button */}

<MyBtn name="Submit & Publish" />




</View>

</ScrollView>


    </SafeAreaView>
  )
}

export default Create