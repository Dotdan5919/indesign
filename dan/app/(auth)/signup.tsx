import React, { useContext, useEffect, useState } from 'react'
import { View, Text ,SafeAreaView , Image , TouchableOpacity, TextInput ,ScrollView, Alert   } from 'react-native'
import { Link , useRouter } from 'expo-router';

import MyBtn from '../../components/MyBtn';
import MyInput from '@/components/MyInput';
import images from '@/constants/images'

import {createUser} from '@/libs/config'
import { useGlobalContext } from '../../context/Globalprovider';



interface errState{
 emailerr:string,
 passworderr:string

};

interface UserData{

  username:string,
  email:string,
   pwd:string

}
export default function signup() {

// const [userName,setUserName]= useState();
// const [email,setEmail]= useState();
// const [password,setPassword]= useState();
const [err,setErr]=useState<errState>({emailerr:"",passworderr:""});
const [userdata,setUserData]=useState<UserData>({username:"",email:"",pwd:""});

const{user,setUser}=useGlobalContext();

      const router = useRouter(); 
        
          // const handlePress = () => {
          //   router.push('/signup'); // Replace '/ScreenName' with the desired screen path
          // }

          
          const isValidEmail= (email)=> {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
          };
// password format verification
          const isValidPassword= (password)=> {
            const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return pwdRegex.test(password);
          };

          const handlePress = async () =>
          {


          

            // setUserData({username:userName})

            // const UserData = {
            //   username:userName,
            //   email:email,
            //    pwd:password};

               setErr({emailerr:'',passworderr:''})
              //  email format verification


              if (!isValidEmail(userdata.email)) {
                
                let text='invalid email format';

                setErr({...err,emailerr:text})

                

              }
              else if(userdata.pwd.length<8) {

                let text='password must be minimum of 8 characters';

                setErr({...err,passworderr:text})


              } 
              
              else {
                
                
                try{


                   const result= await createUser(userdata);
                  
                   
                setUser(userdata);
                  router.replace('/home')

                 }
  
  
                 catch(err){
  
  
                  console.log(err);
  
                 }


              }

               

              

              //  console.log(UserData);
              
              
            

          }

useEffect(()=>{

  

 
  
 
})


  return (
    

      <SafeAreaView  className='bg-slate-950 h-[100vh] flex flex-col '>
<ScrollView >
<View className=' w-fit h-full flex flex-col gap-8  mt-44 px-4 py-2 items-start justify-start relative'>
<Link href="index">  <View className='w-20   flex  justify-start items-start '>   
    
<Image source={images.logo} resizeMode='contain' className='   w-[115px] h-[34px]   '  />


</View>
</Link>


<Text className='text-white text-[32px] font-semibold'>Sign Up</Text>
<View className='flex w-full  gap-4'> 

  <MyInput name="UserName" hideTitle={false} handleChange={(e)=>{   setUserData({...userdata,username:e})}}/>

  <MyInput name="Email" hideTitle={false} handleChange={(e)=>setUserData({...userdata,email:e})}/>
  {err.emailerr && (<Text className='  capitalize text-c1'>{err.emailerr}</Text>) }  
  <MyInput name="Password" hideTitle={false} handleChange={(e)=>setUserData({...userdata,pwd:e})}/>
  {err.passworderr && (<Text className='  capitalize text-c1'>{err.passworderr}</Text>) }  

</View>

 <TouchableOpacity   className='w-full h-16 rounded-md  bg-red-300 items-center justify-center ' style={{backgroundColor:"orange"}}  onPress={handlePress}>
    
            <Text  className='text-black  ' >Sign up</Text>
            
          </TouchableOpacity>


{/* 
<MyBtn name="Sign up" page="/home"/> */}


      <Text className='text-white  w-full text-center'> <Link href="/signin"> Already have and account <Text className='text-c1'> Sign in </Text> </Link></Text>

</View>

</ScrollView>



      </SafeAreaView>

      
      


    
  )
}
