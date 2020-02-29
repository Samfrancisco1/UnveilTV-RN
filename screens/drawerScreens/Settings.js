import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Toolbar from "../Toolbar" ;

class Settings extends Component {
  render() {
    return (
      <View>
        <Toolbar { ...this.props } />
      </View>
    )
  }
}

export default Settings;

const styles = StyleSheet.create({

});