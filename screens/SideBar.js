import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, ImageBackground, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TabScreen from './TabScreen';
import Favourites from './drawerScreens/Favourites';
import Watchlist from './drawerScreens/Watchlist';
import Settings from './drawerScreens/Settings';

import background from '../assets/sidebar.jpg';
import header from '../assets/header.jpg';

class SideBar extends Component {
    constructor(props){
        super(props);          
    }
  render() {
    return (
      <ScrollView >
        <ImageBackground source={background} style={styles.background}> 
            <ImageBackground source={header} style={styles.header}>
                <Ionicons style={{fontWeight: 'bold'}} name={'ios-person'} color={"#fff"}  size={150} />
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>John Doe</Text>
            </ImageBackground>
            <View style={styles.content}>
                <TouchableOpacity style={styles.active}>
                    <Ionicons style={{fontWeight: 'bold'}} name={'ios-menu'} color={"#000"}  size={25} />
                    <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: 'bold', color: '#000'}}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.links}>
                    <Ionicons style={{fontWeight: 'bold'}} name={'ios-heart'} color={"#000"}  size={25} />
                    <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: 'bold', color: '#000'}}>Favourites</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.links}>
                    <Ionicons style={{fontWeight: 'bold'}} name={'ios-list'} color={"#000"}  size={25} />
                    <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: 'bold', color: '#000'}}>Watchlist</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.links}>
                    <Ionicons style={{fontWeight: 'bold'}} name={'ios-settings'} color={"#000"}  size={25} />
                    <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: 'bold', color: '#000'}}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.links}>
                    <Ionicons style={{fontWeight: 'bold'}} name={'ios-exit'} color={"#000"}  size={25} />
                    <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: 'bold', color: '#000'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}

export default SideBar;

const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height,
    },
    header: {
        height: 240,
        width: Dimensions.get('window').width - 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: Dimensions.get('window').width - 80,
    },
    links: {
        height:40,
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    active: {
        height:40,
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 20,
        backgroundColor: '#ff1111',
        alignItems: 'center'
    }

});
