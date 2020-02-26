import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/LoginScreen';
import Slider from './screens/SliderScreen';
import RegisterScreen1 from './screens/RegisterScreen1';
import RegisterScreen2 from './screens/RegisterScreen2';
import RegisterScreen3 from './screens/RegisterScreen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slider">
        <Stack.Screen 
          name="Slider" 
          component={Slider} 
          options={{headerShown: false}} />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}} />
        <Stack.Screen 
          name="RegisterScreen1" 
          component={RegisterScreen1} 
          options={{headerShown: false}} />
        <Stack.Screen 
          name="RegisterScreen2" 
          component={RegisterScreen2} 
          options={{headerShown: false}} />
        <Stack.Screen 
          name="RegisterScreen3" 
          component={RegisterScreen3} 
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'red',
  }
});
