import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet,
        Dimensions,
        ImageBackground,
        ScrollView,
        TextInput, 
        TouchableOpacity 
    } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; 

import background from '../assets/background.jpg';

class RegisterScreen2 extends Component {
    constructor(props) {
        super(props);
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
            <ImageBackground source={background} style={styles.container}>
                <ScrollView>
                    <View style={styles.headerText}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>ENTER PERSONAL INFO.</Text>
                        <Text style={{color: '#ff0000', fontSize: 14}}>STEP 2 OF 3</Text>
                    </View>

                    <View>
                    <View>
                        <Icon
                            name={'ios-person'} 
                            size={28} 
                            color={'red'}
                            style={styles.icon} />
                        <TextInput 
                            style={styles.textInput}
                            placeholder={'Name'} 
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                            underlineColorAndroid={'transparent'}
                            />
                        </View>
                        <View>
                            <Icon
                                name={'ios-mail'} 
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
                                name={'ios-phone-portrait'} 
                                size={28} 
                                color={'red'}
                                style={styles.icon} />
                            <TextInput 
                                style={styles.textInput}
                                placeholder={'Phone Number'} 
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
                            <Icon
                                name={'ios-lock'} 
                                size={28} 
                                color={'red'}
                                style={styles.icon} />
                            <TextInput 
                                style={styles.textInput}
                                placeholder={'Re-Type Password'} 
                                secureTextEntry={this.state.showPassword}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                                underlineColorAndroid={'transparent'}
                                />
                            <TouchableOpacity onPress={() => this.showPass() } style={styles.eyeIcon}>
                                <Icon size={26} name={this.state.showPassword === true ? 'ios-eye' : 'ios-eye-off'}  color={'rgba(255, 255, 255, 0.5)'} />
                            </TouchableOpacity>
                        </View>

                        <LinearGradient colors={['#ee0979', '#ff6a00']}
                                    style={{ alignItems: 'center', 
                                            borderRadius: 50,
                                            height: 50, 
                                            marginTop: 40,
                                            width: Dimensions.get('window').width - 40,
                                            alignSelf: 'center',
                                            marginBottom: 10
                                        }}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen3')}  style={styles.continueBtn} >
                                <Text style={{color: '#fff', textAlign: 'center'}}>PROCEED TO PAYMENT</Text>
                            </TouchableOpacity >
                        </LinearGradient>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default RegisterScreen2;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    headerText: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 40,
        padding:20
    },
    textInput: {
        width: Dimensions.get('window').width - 40,
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
    continueBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 50,
        width: Dimensions.get('window').width - 40
    }
});
