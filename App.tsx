import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import Splash from './src/screens/Splash';
import Onboarding from './src/screens/Onboarding';
import CreateAccount from './src/screens/CreateAccount';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin.tsx';
import TermConditions from './src/screens/TermConditions.tsx/index.tsx';
import Describe from './src/screens/Describe/index.tsx';
import Age from './src/screens/Age/index.tsx';
import Gender from './src/screens/Gender/index.tsx';
import Interested from './src/screens/Interested/index.tsx';
import Meditate from './src/screens/Meditate/index.tsx';
import BottomNav from './src/navigations/BottomNav.tsx';

const Stack = createNativeStackNavigator();

const App=()=>{

  return(
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
      <Stack.Screen name="TermConditions" component={TermConditions} options={{headerShown:false}}/>
      <Stack.Screen name="Describe" component={Describe} options={{headerShown:false}}/>
      <Stack.Screen name="Age" component={Age} options={{headerShown:false}}/>
      <Stack.Screen name="Gender" component={Gender} options={{headerShown:false}}/>
      <Stack.Screen name="Interested" component={Interested} options={{headerShown:false}}/>
      <Stack.Screen name="Meditate" component={Meditate} options={{headerShown:false}}/>
      <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown:false}}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;