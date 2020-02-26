import React, { Component } from 'react';
import { View,
         StyleSheet, 
         Text,
         ImageBackground, 
         Dimensions,
         Image,
         TextInput,
         TouchableOpacity
        } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';       

import background from '../assets/background.jpg'
import logo from '../assets/unveilTV.png'

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            showPassword: true
        }
    }

    showPass = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }
    render() {
        return (
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.viewTitle}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.title}>UNVEILTV</Text>
                </View>
                <View>
                    <Text style={{fontSize: 25, textAlign: 'center'}}>Login to your account</Text>
                    <View>
                        <Icon
                            name={'ios-person'} 
                            size={28} 
                            color={'red'}
                            style={styles.icon} />
                        <TextInput 
                            style={styles.textInput}
                            placeholder={'Email Address'} 
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                            underlineColorAndroid={'transparent'}
                            />
                    </View>
                    <View>
                        <Icon
                            name={'ios-lock'} 
                            size={28} 
                            color={'red'}
                            style={styles.icon} />
                        <TextInput 
                            style={styles.textInput}
                            placeholder={'Password'} 
                            secureTextEntry={this.state.showPassword}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                            underlineColorAndroid={'transparent'}
                            />
                        <TouchableOpacity onPress={() => this.showPass() } style={styles.eyeIcon}>
                            <Icon size={26} name={this.state.showPassword === true ? 'ios-eye' : 'ios-eye-off'}  color={'rgba(255, 255, 255, 0.5)'} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <LinearGradient colors={['#ee0979', '#ff6a00']}
                                    style={{ alignItems: 'center', borderRadius: 50, height: 40 }}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}>
                            <TouchableOpacity  style={styles.login} >
                                <Text style={{color: '#fff', textAlign: 'center'}}>SIGNIN</Text>
                            </TouchableOpacity >
                        </LinearGradient>
                    </View>

                    <View style={{marginTop: 50}}>
                        <Text style={{textAlign: 'center'}}>don't have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen1')}  style={styles.register} >
                            <Text style={{color: '#ff0000', textAlign: 'center', color: '#fff'}}>CREATE ACCOUNT</Text>
                        </TouchableOpacity >
                    </View>
                </View>
                
            </ImageBackground>
        );
    }
} 

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logo: {
        width: 50,
        height: 30
    },
    viewTitle: {
        flexDirection: 'row',
    }, 
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff0000',
    }, 
    textInput: {
        width: Dimensions.get('window').width - 55,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        margin: 20,
    }, 
    icon: {
        position: 'absolute',
        top: 25,
        left: 37,
    },
    eyeIcon: {
        position: 'absolute',
        top: 28,
        right: 37,
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 15,
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 50
      },
      register: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 15,
        height: 40,
        color: '#fff',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#ff0000',
        borderRadius: 50
      }

});