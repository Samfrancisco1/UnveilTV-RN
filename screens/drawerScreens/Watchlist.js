import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Toolbar from "../Toolbar" ;

class Watchlist extends Component {
  render() {
    return (
      <View>
        <Toolbar { ...this.props }/>
      </View>
    )
  }
}

export default Watchlist;

const styles = StyleSheet.create({
    
});