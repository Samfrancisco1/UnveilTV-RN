import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView,
    TextInput, 
    TouchableOpacity,
    Image 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; 

import background from '../assets/background.jpg';
import visa from '../assets/visa.png';
import interswitch from '../assets/interswitch.png';
import master from '../assets/master.png'

class RegisterScreen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ImageBackground source={background} style={styles.container}>
                <ScrollView>
                    <View style={styles.headerText}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>PAYMENT</Text>
                        <Text style={{color: '#ff0000', fontSize: 14}}>STEP 3 OF 3</Text>
                    </View>
                    <View style={styles.viewImages}>
                        <Image source={master} style={{width: 90, height: 50}} />
                        <Image source={visa} style={{width: 80, height: 50}}  />
                        <Image source={interswitch} style={{width: 120, height: 50}}  />
                    </View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 65}}>Credit Card Information</Text>
                    <View>
                        <View>
                            <TextInput 
                                style={styles.textInput}
                                placeholder={'Crebit/Debit Card Number'} 
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                                underlineColorAndroid={'transparent'}
                                />
                        </View>

                        <View style={styles.cardInfo}>
                            <TextInput 
                                style={styles.textInput2}
                                placeholder={'CVV'} 
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                                underlineColorAndroid={'transparent'}
                                />

                            <TextInput 
                                style={styles.textInput2}
                                placeholder={'Expiry Date (03/11)'} 
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                                underlineColorAndroid={'transparent'}
                                />

                            <TextInput 
                                style={styles.textInput2}
                                placeholder={'Pin'} 
                                secureTextEntry={this.state.showPassword}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'} 
                                underlineColorAndroid={'transparent'}
                                />

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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}  style={styles.continueBtn} >
                                <Text style={{color: '#fff', textAlign: 'center'}}>FINALIZE PAYMENT</Text>
                            </TouchableOpacity >
                        </LinearGradient>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default RegisterScreen3;

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
        width: Dimensions.get('window').width - 55,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        margin: 20,
    },
    textInput2: {
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        margin: 20,
    }, 
    viewImages: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('window').width - 55,
        alignSelf: 'center',

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