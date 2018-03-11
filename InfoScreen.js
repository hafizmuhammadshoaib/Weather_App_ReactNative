import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from "react-navigation";
class InfoScreen extends Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <Text>Info Screen</Text>
    )
}
}
export default InfoScreen;