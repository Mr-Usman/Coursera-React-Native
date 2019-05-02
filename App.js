
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './components/MainComponent';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex : 1}}>
        <Main />
      </View>
    );
  }
}
