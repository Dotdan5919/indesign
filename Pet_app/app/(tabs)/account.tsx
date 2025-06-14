import Accnav from '@/components/Accnav'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function account() {
  return (
    <SafeAreaView className='py-10'>

      <View className='w-full items-center justify-center'>
      <Text className='font-bold text-[22px]'>Account</Text>
</View>
    
<Accnav name="Profile" />
<Accnav name="Security" />
<Accnav name="Settings" />




    </SafeAreaView>
  )
}