import * as React from 'react';
import {  View, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TabScreen from './TabScreen';
import Favourites from './drawerScreens/Favourites';
import Watchlist from './drawerScreens/Watchlist';
import Settings from './drawerScreens/Settings';

import header from '../assets/header.jpg';
import sidebar from '../assets/sidebar.jpg';


function Logout({ navigation }) {
  return (
    <View>
      
    </View>
  );
}


function SideBar(props) {
  
  return (
      <DrawerContentScrollView {...props}>
       
          <ImageBackground source={header} style={styles.header}>
            <Ionicons style={{fontWeight: 'bold'}} name={'ios-person'} color={"#fff"}  size={150} />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>John Doe</Text>
          </ImageBackground>
          <ImageBackground source={sidebar} style={styles.content}>
            <DrawerItemList {...props} />
          </ImageBackground>
          
      </DrawerContentScrollView>

  );
}


const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  
  return (
    <Drawer.Navigator 
      initialRouteName="Dashboard"
      drawerContent={ (props) => SideBar(props) } 
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'ios-menu';
          } else if (route.name === 'Favourites') {
            iconName = 'ios-heart';
          } else if (route.name === 'Watchlist') {
            iconName = 'ios-list';
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings';
          } else if (route.name === 'Logout') {
            iconName = 'ios-exit';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

    >
      <Drawer.Screen name="Dashboard" component={TabScreen} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Watchlist" component={Watchlist} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
   
  );
}


const styles = StyleSheet.create({

  header: {
      height: 240,
      width: Dimensions.get('window').width - 80,
      justifyContent: 'center',
      alignItems: 'center',
  },
  content: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').height - 240,
  }

});