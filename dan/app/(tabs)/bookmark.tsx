import { SafeAreaView, Text , View , Image , TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import icons from '@/constants/icons'
import Post from '@/components/Post'

import Myimg from '@/constants/images'
import { useGlobalContext } from '@/context/Globalprovider'
import { bookmark, getBookmark } from '@/libs/config'
import EmptyState from '@/components/EmptyState'

const Bookmark = () => {


   const [bookmark, setBookmark] = useState([]);
    const {user,setUser}=useGlobalContext();
  const fetcher=async()=>{
  
    try{
  
  const result=await getBookmark()
  setBookmark(result);
  
  //  console.log(posts)
  }
  catch(error){
  
    console.log(error)
  }
  
  }



  useEffect(()=>{
  
  fetcher();
  
  },[])


  return (
    <SafeAreaView className='bg-slate-950  flex-col w-full h-full gap-1'>



       


<FlatList

contentContainerStyle={{}}
data={bookmark}
   renderItem={({item})=>(
<View className='px-8'> 
<Post name={item.owner} imgName={item.thumbnail} video={item.video}  title={item.title} avatar={item.avatar} videoId={item.$id} />

</View>

  )}  
ListHeaderComponent={()=>(

  <View className='my-12 flex gap-12 px-8 '>
  <Text className='text-white font-bold text-[24px]'>Saved Videos</Text>

  <View className='flex  bg-slate-800 rounded-md items-end justify-center w-full '>
      <TextInput className='w-full px-3 pr-12 py-4  text-white shadow-md ' placeholder="Search for a topic" placeholderTextColor="gray" > 
       
       </TextInput>
       <Image source={icons.search} className='absolute right-6' />
       </View>
       </View>
)}   




ListEmptyComponent={()=>(

  <EmptyState/>
  
  
  )}
/>
      

      
    </SafeAreaView>

  )
}

export default Bookmark