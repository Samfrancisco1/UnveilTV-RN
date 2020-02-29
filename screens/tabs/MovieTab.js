import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Toolbar from '../Toolbar';

class MovieTab extends Component {
  constructor(props){
    super(props);  
  }
  render() {
    return (
      <View style={styles.container}>
          <Toolbar { ...this.props } />
          
      </View>
    )
  }
}

export default MovieTab;

const styles = StyleSheet.create({
    container: {

    }
});