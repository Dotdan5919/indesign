import { Alert } from 'react-native';
import { Client, Account, ID ,Storage, Databases,Query } from 'react-native-appwrite';
import { router, useRouter } from 'expo-router';
import { useGlobalContext } from '@/context/Globalprovider';


let client = new Client()
    .setProject('67c16ac4003dfe9b0301')
    .setPlatform('com.protech.aora');


    const ApiKey="standard_76881c0c2783f197cfc440b30c3e4ff92d8447c78f39a171f5d7f331fc0593d8544fe5f8f0e367e275420561dd7e51fb4e5da30f01e302ab980e5e1388ed58fe3d5725cfa829b1ac5e597918f6da624b5191234565da4c64b16dd4d81f72e85f9a393b567ae01e80cd1a436ca284dfc338c2956af507c46714421860c21b7c3a"

    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67c16ac4003dfe9b0301')   // Your Project ID
    .setPlatform('com.protech.aora'); 

    let account = new Account (client);
    const databaseId='67c16ca7003cd4ab8fd0';
    const userCollectionId='67ca66da00198be4e287';
    const bookmarkCollectionId='67cd905f0003810ff9ab';

   const storage=new Storage (client);
   const database= new Databases (client)
       
    
    export async  function createUser(userData)
  {

     
    try{ 

        let success:string
       
        // console.log(userData);
                await account.create(ID.unique(), userData.email, userData.pwd,userData.username);
                
                
      
        
                Alert.alert(
                'Welcome ' + userData.username,
                'Your account has been created successfully',
            
            );
            
            
            login(userData);

            
        }
        
        catch (error) {
            
            
            // console.log(userData);

        //  throw new Error(error);
        const err=  new Error(error);

        
        Alert.alert(
            err.name,
            err.message,
        
        )
        


    }
    }


    export async function login(userData)


    {
       


        


try{
    const session= await account.createEmailPasswordSession
    (
        userData.email,
        userData.pwd

    );
    return session;


}

catch(error){



// throw new Error(error);

const err=  new Error(error);

        
Alert.alert(
    err.name,
    err.message,

)

// Alert.alert(
// error.name,
// error.message

// )

}



    }
   

    export async function logout()
    {
        



        try{  
        account.deleteSession("current");

        return "logged out";
       
    }   

    catch (error){

        console.log(error)
    }

    }
    
export async function session(){

    // const {user,setUser,setLoading}=useGlobalContext();


    try {
        const sess = await account.get();

        
        
        // setUser({name:sess.name,email:sess.email});
    // //    setUser(sess);
        // return user;
        
      
       
    
        // console.log(sess);
         return sess;
      
        // Logged in
    } catch (err) {
        // Not logged in
        
        // return err;
    }
}
    

export async function getPosts(){

try{ 
const currentAccount= await account.get();

    const result = await database.listDocuments(
        databaseId, // databaseId
        userCollectionId , // userCollectionId
         // queries (optional)
    );
return result.documents


}


catch(Error){


console.log(Error);

}
}

export async function getUserPosts(){

    try{ 
    const currentAccount= await account.get();
    
        const result = await database.listDocuments(
            databaseId, // databaseId
            userCollectionId, // userCollectionId
             [Query.equal("user_email",currentAccount.email)]// queries (optional)
        );
    return result.documents
    
    
    }
    
    
    catch(Error){
    
    
    console.log(Error);
    
    }
    }


    export async function bookmark(videoId)
    {

        const currentAccount= await account.get();

        try{
                const checkBookmark =await database.listDocuments(

                 databaseId, // databaseId
                    bookmarkCollectionId, 
                    [Query.equal("user_email",currentAccount.email),
                       
                    Query.equal("video_id",videoId)

                    ]
                );

                const video =await database.listDocuments(

                    databaseId, // databaseId
                       userCollectionId ,
                    [Query.equal("$id",videoId)] );


                if(checkBookmark.documents.length<1){

                    const newBookmark=await database.createDocument(
                        databaseId, // databaseId
                        bookmarkCollectionId, // collectionId
                        ID.unique(),
                        {
                        user_email:currentAccount.email,
                            video_id:videoId,
                            
                            active:true,
                            video:video.documents[0].video,
                            owner:video.documents[0].user_email,
                            title:video.documents[0].title,
                            thumbnail:video.documents[0].thumbnail,

                            

                        }
                    );
                    Alert.alert('Success', 'Bookmark added!');
                    return 'added';

                }
                else{

                    const newBookmark=await database.updateDocument(
                        databaseId, // databaseId
                        bookmarkCollectionId, // collectionId
                        checkBookmark.documents[0].$id,
                        {
                          'active':!checkBookmark.documents[0].active,

                        }
                    )
                    
                   
                    Alert.alert('Success', 'Bookmark updated!');
      return 'updated'; //return updated




                }


                
        }

        catch(error){


            Alert.alert("Error","unsuccessful");

            console.error(error)
        }

    }


    export async function getBookmark()
    {

        const currentAccount= await account.get();

        const bookmark =await database.listDocuments(

            databaseId, // databaseId
               bookmarkCollectionId, 
               [Query.equal("user_email",currentAccount.email),
               Query.equal("active",true)


               ]
           );
           
      




           return  bookmark.documents;
    }