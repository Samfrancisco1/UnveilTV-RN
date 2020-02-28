import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toolbar from '../Toolbar';

class ProfileTab extends Component {
  constructor(props){
    super(props);  
  }
  render() {
    return (
      <View style={styles.container}>
        <Toolbar props={ this.props } />
        <Text> TV series Screen </Text>
      </View>
    )
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {

    }
});