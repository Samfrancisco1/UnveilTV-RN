import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toolbar from "../../components/Toolbar" ;

class Favourites extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        
    }
    render() {
        return (
            <View>
                <Toolbar props={ this.props } />
            </View>
        )
    }
}

export default Favourites;

const styles = StyleSheet.create({
    
});