import MyBtn from '@/components/MyBtn';
import vector from '@/constants/images';
import { Image, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (

    <SafeAreaView  className='bg-red-200 '>
    <View
      className="flex   items-center justify-center gap-2  pt-52 " >

    <View className='flex  items-center justify-center h-[400px]  '> 
      <Image source={vector.vector} resizeMode='contain' className='w-[500px]  ' />
</View>




<View className=' bg-white  flex items-center  gap-5 p-20 rounded-full w-[630px] h-[720px] '>

<View className=' mt-10'>  
      <Text className=" text-[35px] font-bold">Find a friend, </Text>
      <Text  className=" text-[35px] font-bold">Give a Home </Text>
</View>
    
<MyBtn name="Get Started" page="/home" />

</View>

    </View>

    </SafeAreaView>
  );
}
