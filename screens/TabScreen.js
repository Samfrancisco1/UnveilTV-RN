import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MovieTab from './tabs/MovieTab';
import SeriesTab from './tabs/SeriesTab';
import DocumentaryTab from './tabs/DocumentaryTab';
import TVTab from './tabs/TVTab';
import ProfileTab from './tabs/ProfileTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Movies') {
              iconName = 'ios-play';
            } else if (route.name === 'TV Series') {
              iconName = 'ios-play-circle';
            } else if (route.name === 'Documentary') {
              iconName = 'md-desktop';
            } else if (route.name === 'Live TV') {
              iconName = 'ios-cloud';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff0000',
          inactiveTintColor: '#000',
          activeBackgroundColor: 'transparent',
          inactiveBackgroundColor: "transparent",
        }}
      >

        <Tab.Screen name="Movies" component={MovieTab} options={{title: 'Movies'}} />
        <Tab.Screen name="TV Series" component={SeriesTab} />
        <Tab.Screen name="Documentary" component={DocumentaryTab} />
        <Tab.Screen name="Live TV" component={TVTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
        
      </Tab.Navigator>
  );
}