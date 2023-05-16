import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/screens/SignupScreen';
import Mailscreen from './src/screens/Mailscreen';
import PasscodeScreen from './src/screens/PasscodeScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import UserScreen from './src/screens/UserScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="mail" component={Mailscreen} />
        <Stack.Screen name="passcode" component={PasscodeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="user" component={UserScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;