
import { View, Text , Image, TouchableOpacity, TextInput, Keyboard , TouchableWithoutFeedback, FlatListComponent } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import Card from '@/components/Card'

import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView,FlatList } from 'react-native'
import TrendingPosts from '@/components/TrendingPosts'
import Post from '@/components/Post'
import Myimg from '@/constants/images'
import { hide } from 'expo-splash-screen'
import EmptyState from '@/components/EmptyState'
import { getPosts } from '@/libs/config'
import { useGlobalContext } from '@/context/Globalprovider'


const Home = () => {


  const [posts, setPosts] = useState([]);
  const {user,setUser}=useGlobalContext();
const fetcher=async()=>{

  try{

const result=await getPosts();
setPosts(result);

// console.log(posts)
}
catch(error){

  console.log(error)
}

}



useEffect(()=>{

fetcher();

},[])


const PostArray=[{name:"Branda Etter",title:"Woman walks down a Tokyo....",img:(Myimg.ai_image_1),avatar:(Myimg.avatar),id:1},
  {name:"Branda Etter",title:"Woman walks down a Tokyo....",img:(Myimg.dog),avatar:(''),id:2}];

  return (
        <SafeAreaView className='bg-slate-950 flex flex-col w-full h-full px-8 '>
           


<FlatList
showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false}
keyExtractor={(item)=>item.$id}

data={posts}
renderItem={({item}) => (

<View>

<Post name={item.user_email} imgName={item.thumbnail} video={item.video}  title={item.title} avatar={item.avatar} videoId={item.$id} />

</View>


)}


ListHeaderComponent={()=>(


  <View className=' flex gap-4 my-8'> 
  <View className='flex flex-row gap-4  justify-between items-center'> 
  <View className=''>

    <Text className='text-white text-[16px]'>Welcome Back</Text>
    <Text className="text-white font-bold text-[32px]">{user.name } </Text>
    
  </View>
 

  <Image source={images.logo2} resizeMode='contain' /> 
  </View>
  
  <View className='flex  bg-slate-800 rounded-md items-end justify-center w-full '>
     <TextInput className='w-full px-3 pr-12 py-4  text-white shadow-md ' placeholder="Search for a topic" placeholderTextColor="gray" > 
      
      </TextInput>
      <Image source={icons.search} className='absolute right-6'/>
      </View>




 
<TrendingPosts />




     </View>  



)}


ListEmptyComponent={()=>(

<EmptyState/>


)}


/>

       









          
    
    
          
    
        </SafeAreaView>
  )
}

export default Home