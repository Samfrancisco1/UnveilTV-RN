import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toolbar from '../../components/Toolbar';

class ProfileTab extends Component {
  constructor(props){
    super(props);  
  }
  render() {
    return (
      <View style={styles.container}>
        <Toolbar { ...this.props } />
        <Text> ProfileTab Screen </Text>
      </View>
    )
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        
    }
});