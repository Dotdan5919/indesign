import { Stack } from "expo-router";

import Globalprovider from "@/context/Globalprovider";
import "./global.css";
export default function RootLayout() {
  return (
  <Globalprovider>
  <Stack>

<Stack.Screen name="welcome" options={{headerShown:false}} />
<Stack.Screen name="(tabs)" options={{headerShown:false}} />
<Stack.Screen name="pet/[pet]" options={{headerShown:false}} />





  </Stack>
  </Globalprovider> );
}
