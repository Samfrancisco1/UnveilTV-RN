import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; 

import background from '../assets/background.jpg';


export default class RegisterScreen1 extends Component{
    constructor(){
        super();
        this.state = {
            selected: 'year'
        }
    }

    changeSelected = (plan) => {
        this.setState({
            selected: plan
        });
    }

    render(){
        
        return(
            <ImageBackground source={background} style={styles.container}>
                <ScrollView>
                    <View style={styles.headerText}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>CHOOSE A PLAN</Text>
                        <Text style={{color: '#ff0000', fontSize: 14}}>STEP 1 OF 3</Text>
                    </View>
                    <View style={styles.viewButtons}>
                        <TouchableOpacity onPress={() => this.changeSelected('free')} style={this.state.selected === 'free'? styles.planButtonSelected : styles.planButton }>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>FREE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.changeSelected('month')} style={this.state.selected === 'month'? styles.planButtonSelected : styles.planButton }>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>MONTHLY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.changeSelected('year')} style={this.state.selected === 'year'? styles.planButtonSelected : styles.planButton}>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>YEARLY</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.viewHeader}>
                            <Text style={styles.title}>Price</Text>
                            <View style={styles.viewContent}>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'free' ? '#ff0000' : '#c1c3c3'}}>$ 0</Text>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'month' ? '#ff0000' : '#c1c3c3'}}>$ 4.99</Text>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'year' ? '#ff0000' : '#c1c3c3'}}>$ 59.88 </Text>
                            </View>
                        </View>
                        <View style={styles.hr}></View>

                        <View style={styles.viewHeader}>
                            <Text style={styles.title}>Video Quality</Text>
                            <View style={styles.viewContent}>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'free' ? '#ff0000' : '#c1c3c3'}}>Basic HD</Text>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'month' ? '#ff0000' : '#c1c3c3'}}>Full HD</Text>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'year' ? '#ff0000' : '#c1c3c3'}}>4k+HDR</Text>
                            </View>
                        </View>
                        <View style={styles.hr}></View>

                        <View style={styles.viewHeader}>
                            <Text style={styles.title}>Screens you can watch on at the same time</Text>
                            <View style={styles.viewContent}>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'free' ? '#ff0000' : '#c1c3c3'}}>1</Text>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'month' ? '#ff0000' : '#c1c3c3'}}>2</Text>
                                <Text style={styles.contentInfo, {color: this.state.selected === 'year' ? '#ff0000' : '#c1c3c3'}}>4</Text>
                            </View>
                        </View>
                        <View style={styles.hr}></View>

                        <View style={styles.viewHeader}>
                            <Text style={styles.title}>Watch on your laptop, TV, phone and tablet</Text>
                            <View style={styles.viewContent}>
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'free' ? '#ff0000' : '#c1c3c3'} />
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'month' ? '#ff0000' : '#c1c3c3'} />
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'year' ? '#ff0000' : '#c1c3c3'} />
                            </View>
                        </View>
                        <View style={styles.hr}></View>

                        <View style={styles.viewHeader}>
                            <Text style={styles.title}>Unlimited films and TV programmes</Text>
                            <View style={styles.viewContent}>
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'free' ? '#ff0000' : '#c1c3c3'} />
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'month' ? '#ff0000' : '#c1c3c3'} />
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'year' ? '#ff0000' : '#c1c3c3'} />
                            </View>
                        </View>
                        <View style={styles.hr}></View>

                        <View style={styles.viewHeader}>
                            <Text style={styles.title}>Cancel at any time</Text>
                            <View style={styles.viewContent}>
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'free' ? '#ff0000' : '#c1c3c3'} />
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'month' ? '#ff0000' : '#c1c3c3'} />
                                <Icon name={'ios-checkmark'} size={30} color={this.state.selected === 'year' ? '#ff0000' : '#c1c3c3' } />
                            </View>
                        </View>
                        <View style={styles.hr}>
                            <Text>
                                HD (720p), Full HD(1080p), UltraHD (4k) and HDR availability subject to your internet
                                service and device capabilities. Not all content available in HD, Ful HD, Ultra HD or HDR. 
                                See Terms of Use for more details
                            </Text>
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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen2')}  style={styles.continueBtn} >
                                <Text style={{color: '#fff', textAlign: 'center'}}>CONTINUE</Text>
                            </TouchableOpacity >
                        </LinearGradient>
                    </View>                   
                </ScrollView>
            </ImageBackground>
        );
    }
}

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
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    planButton: {
        backgroundColor: '#ff3333',
        height: 60,
        width: 100,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    planButtonSelected: {
        backgroundColor: '#c1c3c9',
        height: 60,
        width: 100,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewHeader: {
        flexDirection: 'column',
    },
    viewContent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        marginTop: 20,
        fontSize: 15,
        textAlign: 'center'
    },
    contentInfo: {
        color: '#c1c3c9',
        fontSize: 15,
        marginTop: 10,
    },
    hr: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c1c3c9',
        marginTop: 15,
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center'
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

