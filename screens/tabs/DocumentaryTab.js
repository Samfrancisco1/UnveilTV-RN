import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toolbar from '../Toolbar';

class DocumentaryTab extends Component {
  constructor(props){
    super(props);  
  }
  render() {
    return (
      <View style={styles.container}>
        <Toolbar { ...this.props } />
        <Text> DocumentaryTab Screen </Text>
      </View>
    )
  }
}

export default DocumentaryTab;

const styles = StyleSheet.create({
    container: {

    }
});