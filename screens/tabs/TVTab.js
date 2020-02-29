import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toolbar from '../Toolbar';

class TVTab extends Component {
    constructor(props){
        super(props);  
    }

    render() {
        return (
        <View style={styles.container}>
            <Toolbar { ...this.props } />
            <Text> Live tv Screen </Text>
        </View>
        )
    }
}

export default TVTab;

const styles = StyleSheet.create({
    container: {

    }
});