import React from 'react';
import Mainapp from './mainContainer.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/login/welcome-screen';
import SignUpScreen from '../screens/login/sign-up-screen';

const Root = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {false ? (
        <>
          {/* ==> Private Tab Bar Screens */}
          <Stack.Screen name="app" component={Mainapp} />
        </>
      ) : (
        <>
          {/* ==> Public Screens */}
          <Stack.Screen name="welcome-screen" component={WelcomeScreen} />
          <Stack.Screen name="sign-up-screen" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Root;
