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
      <FlatList style={{backgroundColor:"#1EAAAB"}}
        data={[{ key: "Karachi" }, { key: "Lahore" }, { key: "Islamabad" }]}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              if (item.key === "Karachi")
                this.props.navigation.navigate("Info", {
                  itemId: 1174872
                });
              if (item.key === "Lahore")
                this.props.navigation.navigate("Info", {
                  itemId: 1172451
                });
              if (item.key === "Islamabad")
                this.props.navigation.navigate("Info", {
                  itemId: 1176615
                });
            }}
          >
            <Text style={{ padding: 20,fontWeight:"bold",fontSize:20 }}>{item.key}</Text>
          </TouchableHighlight>
        )}
      />
    );
  }
}
export default HomeScreen;
