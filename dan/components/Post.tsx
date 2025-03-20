import { View, Text , Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import React, { useEffect, useState } from 'react'
import icon from '@/constants/icons'
import image from '@/constants/images'
import {  useVideoPlayer, VideoView } from 'expo-video';
import { bookmark } from '@/libs/config';
import { useEvent } from 'expo';

const Post = ({title,name,imgName,avatar,video,videoId}) => {

  const [activeOption, setActiveOption] = useState(false);

  

  const [play,setPlay]=useState(false);
  const videoSource =video;

  const player = useVideoPlayer(videoSource, player => {
    // player.loop = false;
    // player.play();

    // player.playing=true;
    player.showNowPlayingNotification=true;

    
  });


  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  const handleBookmark=async (videoId) =>{

try{


const sendBookmark= await bookmark(videoId);


}


catch(error){



}

  }


  useEffect(()=>{
    if(play){player.play();}
    else{
      player.pause();

    }



   
  },[play])



  return (
    <View className='w-full flex my-4 '>


<View className=" w-full  justify-between flex-row gap-5 my-4 relative">

    <View className='flex items-start justify-start flex-row gap-2'> 
    <View className='w-8  h-8  border-[1px] shadow-sm border-c1 overflow-hidden flex justify-center items-center rounded-md bg-white'>
       <Image resizeMode='cover' className='w-8 h-8' source={avatar} /> 
       </View>

    <View className='flex -top-1 justify-start items-start '>
    <Text className='text-white text-lg flex '>{title}</Text>
    <Text className='text-gray-300 text-sm'>{name}</Text>
    

      </View>

      </View>

<TouchableOpacity onPress={()=>setActiveOption(!activeOption)} className='relative'>
    <Image source={icon.option} resizeMode="contain"  className="w-10 h-6 "  />


    
      
    </TouchableOpacity>


{activeOption && ( 
  <TouchableWithoutFeedback onPress={()=>setActiveOption(!activeOption)} > 
  <View className='w-full h-[100vh] absolute top-0 left-0  z-50'>
  <View className="w-fit p-4  h-auto bg-slate-800 absolute z-20 right-4 top-7 rounded-md flex gap-4">
    
   <TouchableOpacity className='flex flex-row gap-4' onPress={()=>handleBookmark(videoId)}>  
    <Image source={icon.bookmark} resizeMode='contain' className='w-4 h-4'/>
    <Text className='text-white'>Save</Text>

    </TouchableOpacity>
    <View className='flex flex-row gap-4'> 
    <Image source={icon.del} resizeMode='contain' className='w-4 h-4 hover:bg-c1'/>

    

    <Text className='text-white hover:text-c1'>Delete</Text>
    </View>

    </View>
    </View>
    </TouchableWithoutFeedback>
    )}
    


      </View>


<TouchableOpacity onPress={()=>setPlay(!play)} className="w-full rounded-lg h-[180px] p-2 flex  items-center justify-center">



{isPlaying?<VideoView style={{width: 350,height: 180,backgroundColor:"black"}} player={player} allowsFullscreen 
allowsPictureInPicture
className='w-[350px] h-[180px] rounded-lg '
nativeControls={true}
contentFit="cover"
showNowPlayingNotification={true}
curentTime
duration
startsPictureInPictureAutomatically
/> :  


<Image source={{uri:imgName}} resizeMode='cover'  className='w-full h-[180px] rounded-lg '/>

}

</TouchableOpacity>







    </View>



  )
}

export default Post