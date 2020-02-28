import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Toolbar extends Component {
    constructor(props){
        super(props);    
    }

    render() {
        const { props } = this.props;
        
        return (
            <View style={styles.header}>  
                <View style={{backgroundColor: '#ff0000', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={ () => props.navigation.toggleDrawer() }>
                        <Ionicons name={'ios-menu'} size={30} color={'#fff'} />
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: 'ff0000', flex: 5, color: '#fff',  justifyContent: 'center', alignContent: 'center'}}>
                    <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>{ props.route.name }</Text>
                </View>
                <View style={{backgroundColor: 'ff0000', flex: 1, alignItems: 'center'}}>
                    
                </View>
            </View>
        );
    }
}

export default Toolbar;

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#ff0000',
        flexDirection: 'row',
        marginTop: 24
    }
});
