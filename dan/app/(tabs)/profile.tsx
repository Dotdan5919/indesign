import { Image, SafeAreaView, Text, View ,FlatList, TouchableWithoutFeedback , ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '@/constants/images'
import icon from '@/constants/icons'

import Post from '@/components/Post'
import Myimg from '@/constants/images'
import { Redirect, useRouter } from 'expo-router'
import MyBtn from '@/components/MyBtn'
import EmptyState from '@/components/EmptyState'
import { getPosts, getUserPosts, logout } from '@/libs/config'
import { useGlobalContext } from '../../context/Globalprovider'




const Profile = () => {

const {user,setUser,setIsLoggedIn,isloggedIn}=useGlobalContext();


const [posts, setPosts] = useState([]);
const fetcher=async()=>{

  try{
    
const result=await getUserPosts();
setPosts(result);

// console.log(posts)
}
catch(error){

  console.log(error)
}

}

const postArray:any[]=[{name:"Dani-El",title:"Woman walks down a Tokyo....",img:(Myimg.ai_image_1),avatar:(Myimg.avatar)},
  {name:"Dani-El",title:"Woman walks down a Tokyo....",img:(Myimg.dog),avatar:('')}];


const router= useRouter();

const handlePress = async()=>{

   
  logout().then((res)=>{
    

if(res){



  setUser({name:null,email:null});
  setIsLoggedIn(false);

  router.replace('/signin');
  


}



  })
  
  
  .catch((error)=>{

console.log(error);

  });


}

useEffect(()=>{
  fetcher();},[])


  return (
    <SafeAreaView className='bg-slate-950  flex-col w-full h-full  '>
   
  







<FlatList
showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false}


data={posts}
  



renderItem={({item}) => (
<View className='mx-6'> 

<Post name={item.user_email} imgName={item.thumbnail} video={item.video}  title={item.title} avatar={item.avatar} videoId={item.$id}/>
</View>


)}

ListHeaderComponent={()=>(



<View className='gap-[8px] mx-6'> 


<TouchableWithoutFeedback onPress={() =>handlePress() }>
<View className='w-full  flex justify-end items-end p-1'>
  <Image source={icon.logout}  resizeMode='contain' className=' w-8'/>
  </View>

</TouchableWithoutFeedback>

   <View className='flex flex-col gap-2 justify-center  w-fit items-center   mt-3' >

<View className='w-14 h-14 border-[2px] border-c1 p-1 justify-center items-center rounded-lg overflow-hidden'>
  <Image source={images.avatar} resizeMode='contain' className=' '  />
 
</View>
<Text className='text-white text-[15px]'>{user.name}</Text>


   </View>



   <View className='w-full  flex flex-row items-center justify-center gap-2 p-3'>
    <View className='flex items-center justify-center '>

    <Text className='text-white text-[25px]   font-bold' >10</Text>
   <Text className='text-white '>post</Text>
   </View>

   <View className='flex items-center justify-center'>
    <Text className='text-white text-[25px] font-bold'  >1.2k</Text>
    <Text className='text-white'>views</Text>
    </View>

    
     </View>
     </View>




)}

ListEmptyComponent={()=>(

<EmptyState />

  )}

/>


     

     

    </SafeAreaView>
  )
}

export default Profile