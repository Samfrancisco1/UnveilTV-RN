import React, {Component} from 'react';
import { 
  StyleSheet, 
  ScrollView, 
  Text, 
  View,
  Dimensions,
  TouchableOpacity ,
  Image,
  ImageBackground
 } from 'react-native';
 import { LinearGradient } from 'expo-linear-gradient';

 import logo from '../assets/unveilTV.png';
 import background from '../assets/back.jpg';
 import background1 from '../assets/background.jpg';
 import devices from '../assets/devices.png';

export default function Slider({navigation}) {
        return (
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
          <View style={styles.outer}>
            <ImageBackground style={styles.background} source={background1}>
              <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}> 
                <Image style={styles.image} source={logo}></Image>
                <Text style={styles.text}>Welcome to UnveilTV</Text>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.login} >
                  <Text  style={{color: '#ff0000', textAlign: 'center', color: '#fff'}}>SIGNIN</Text>
                </TouchableOpacity >
                <LinearGradient colors={['#ee0979', '#ff6a00']}
                                style={{ alignItems: 'center', borderRadius: 50, height: 40 }}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen1')} style={styles.register} >
                    <Text style={{color: '#fff', textAlign: 'center'}}>SIGNUP</Text>
                  </TouchableOpacity >
                </LinearGradient>
              </View>
            </ImageBackground>
          </View> 
          <View style={styles.outer}>
            <ImageBackground style={styles.background} source={background}>
            <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}> 
                <Image style={styles.image} source={devices}></Image>
                <Text style={styles.text}>Watch on any device.</Text>
                <Text style={styles.p}>
                  Stream your favourite shows and movies from our platform accross any device   
                </Text>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}  style={styles.login} >
                  <Text style={{color: '#ff0000', textAlign: 'center', color: '#fff'}}>SIGNIN</Text>
                </TouchableOpacity >
                <LinearGradient onPress={() => navigation.navigate('RegisterScreen1')} colors={['#ee0979', '#ff6a00']}
                                style={{ alignItems: 'center', borderRadius: 50, height: 40 }}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen1')} style={styles.register} >
                    <Text style={{color: '#fff', textAlign: 'center'}}>SIGNUP</Text>
                  </TouchableOpacity >
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.outer}>
            <ImageBackground style={styles.background} source={background}>
            <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}> 
                <Image style={styles.image} source={logo}></Image>
                <Text style={styles.text}>Watch from anywhere at anytime.</Text>
                <Text style={styles.p}>At your own convinence, you can stream as long as you like.</Text>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}  style={styles.login} >
                  <Text style={{color: '#ff0000', textAlign: 'center', color: '#fff'}}>SIGNIN</Text>
                </TouchableOpacity >
                <LinearGradient onPress={() => navigation.navigate('RegisterScreen1')} colors={['#ee0979', '#ff6a00']}
                                style={{ alignItems: 'center', borderRadius: 50, height: 40 }}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen1')} style={styles.register} >
                    <Text style={{color: '#fff', textAlign: 'center'}}>SIGNUP</Text>
                  </TouchableOpacity >
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        );
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    outer: {
      backgroundColor: '#FFF',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    p: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text: {
      color: '#ff0000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    image: {
      width: 250,
      height: 150
    },
    buttonView: {
      height: 70,
      flexDirection: 'row-reverse',
      justifyContent: 'space-evenly',
      width: Dimensions.get('window').width
    },
    login: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 40,
      color: '#fff',
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#ff0000',
      borderRadius: 50
    },
    register: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 40,
      backgroundColor: 'transparent',
      borderRadius: 50
    }, 
    background: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
      
    }

  });