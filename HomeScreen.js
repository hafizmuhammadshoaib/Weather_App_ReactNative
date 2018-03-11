import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
class HomeScreen extends Component {
  render() {
    return (
      <FlatList
        data={[{ key: "Karachi" }, { key: "Lahore" }, { key: "Islamabad" }]}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate("Info");
            }}
          >
            <Text style={{ padding: 20 }}>{item.key}</Text>
          </TouchableHighlight>
        )}
      />
    );
  }
}
export default HomeScreen;
