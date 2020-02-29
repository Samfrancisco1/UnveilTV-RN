import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TabScreen from './TabScreen';
import Favourites from './drawerScreens/Favourites';
import Watchlist from './drawerScreens/Watchlist';
import Settings from './drawerScreens/Settings';
import SideBar from './SideBar';

function Logout({ navigation }) {
  return (
    <View style={{  }}>
      
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    
      <Drawer.Navigator 
      initialRouteName="Dashboard"
      drawerContent={ props => <SideBar props={ props } /> } >
        <Drawer.Screen name="Dashboard" component={TabScreen} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Watchlist" component={Watchlist} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
   
  );
}