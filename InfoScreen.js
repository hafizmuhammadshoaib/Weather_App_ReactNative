import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";
class InfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    apiKey = "&appid=9d3f42a6329ab0afe70a2551a309f79b";
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${itemId}${apiKey}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 0 }}>
          <ActivityIndicator
            size="large"
            style={{ flex: 1, justifyContent: "center" }}
          />
        </View>
      );
    }
    let obj = this.state.dataSource;

    return (
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: "#75CEFA" }}>
        <Text style={Styles.cityName}>
          {obj.name},{obj.sys.country}
        </Text>
        <Text style={Styles.temp}>Temperature: {obj.main.temp - 273.15}&deg;</Text>
        <Text style={Styles.minMaxTemp}>Minimum Temperature: {obj.main.temp_min - 273.15}&deg;</Text>
        <Text style={Styles.minMaxTemp}>Maximum Temperature: {obj.main.temp_max - 273.15}&deg;</Text>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  temp: {
    textAlign: "center",
    fontWeight: "bold",
    width: 400,
    fontSize: 30
  },
  cityName: {
    textAlign: "center",
    fontWeight: "bold",
    width: 400,
    fontSize: 40
  },
  minMaxTemp:{
    textAlign: "center",
    fontWeight: "bold",
    width: 400,
    fontSize: 20 
  }
});
export default InfoScreen;
