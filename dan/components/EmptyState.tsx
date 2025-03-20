import { View, Text , Image } from 'react-native'
import React from 'react'
import MyBtn from './MyBtn'
import icon from '@/constants/icons'

const EmptyState = () => {
  return (
    <View className='flex  justify-center items-center mx-6 gap-6'>

<View className=' flex flex-col gap-0 justify-center items-center h-[216px] w-[270px]'>
 <Image source={icon.empty} resizeMode='contain' className='w-[270px] h-[200px]' />
 <Text className="text-white">No Videos Found</Text>

 </View>

 <MyBtn name="Back to Explorer" page="/home"/>

</View>



  )
}

export default EmptyState