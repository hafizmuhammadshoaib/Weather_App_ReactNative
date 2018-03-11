/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeScreen from './HomeScreen';
import InfoScreen from './InfoScreen';
import { StackNavigator } from "react-navigation";



export default class App extends Component {
  render() {
    return (
      <RootStack />
      
    );
  }
}

const RootStack = StackNavigator({
  
    Home:{
      screen:HomeScreen
    },
    Info:{
      screen:InfoScreen
    }
  },
  {
    initialRouteName:"Home",
    navigationOptions:{
      title:"Weather App"
    }
  }
)