import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
class HomeScreen extends Component {
  render() {
    let items = [{ key: "Karachi" }, { key: "Lahore" }, { key: "Islamabad" }];
    return (
      // <FlatList style={{backgroundColor:"#1EAAAB"}}
      //   data={[{ key: "Karachi" }, { key: "Lahore" }, { key: "Islamabad" }]}
      //   renderItem={({ item }) => (
      //     <TouchableHighlight
            // onPress={() => {
            //   if (item.key === "Karachi")
            //     this.props.navigation.navigate("Info", {
            //       itemId: 1174872
            //     });
            //   if (item.key === "Lahore")
            //     this.props.navigation.navigate("Info", {
            //       itemId: 1172451
            //     });
            //   if (item.key === "Islamabad")
            //     this.props.navigation.navigate("Info", {
            //       itemId: 1176615
            //     });
            // }}
      //     >
      //       <Text style={{ padding: 20,fontWeight:"bold",fontSize:20 }}>{item.key}</Text>
      //     </TouchableHighlight>
      //   )}
      // />
      <List style={{backgroundColor:"#1EAAAB"}} dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text  onPress={() => {
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
            }}>{item.key}</Text>
              </ListItem>
            }>
          </List>
    );
  }
}
export default HomeScreen;
