import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';
import { View,Text, SafeAreaView, Image, Button ,TouchableOpacity } from 'react-native';
import Card from '../assets/images/Card.png';
import Card2 from '../assets/images/Card_2.png';
import logo from '../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient'; 
import { Slot } from 'expo-router';




import { useColorScheme } from '@/hooks/useColorScheme';
import { ScreenStack } from 'react-native-screens';
import Globalprovider from '../context/Globalprovider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
   



  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   
<Globalprovider>
    <Stack > 
      
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='(auth)' options={{headerShown:false}} />
      <Stack.Screen name='(tabs)' options={{headerShown:false}} />


     
<StatusBar style='light' backgroundColor="#161622" />
      
       </Stack>
       </Globalprovider>

    
  );
}
