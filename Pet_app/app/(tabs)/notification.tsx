import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function notification() {
  return (
   <SafeAreaView className='py-10'>

       <View className='w-full items-center justify-center'>
          <Text className='font-bold text-[22px]'>Notificaion</Text>
    </View>


    
   </SafeAreaView>



  )
}