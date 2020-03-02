import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toolbar from '../../components/Toolbar';
import { Ionicons } from '@expo/vector-icons';

class TVTab extends Component {
    constructor(props){
        super(props);  
    }

    render() {
        return (
        <View style={styles.container}>
            <Toolbar { ...this.props } />
            <View style={styles.container}>
                
                <Ionicons name={'md-desktop'} color={'#c1c3c9'} size={150} />
                <Text> 
                    Coming Soon
                </Text>
                
            </View>
            
        </View>
        )
    }
}

export default TVTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});