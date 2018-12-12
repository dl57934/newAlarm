import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Home extends Component {
  _getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    hours > 12 ? (hours = hours - 12) : hours;
    minute < 10 ? (minute = `0${minute}`) : minute;
    return `${hours}:${minute}`;
  }
  componentWillMount() {
    this._stateChange();
    setInterval(() => {
      this._stateChange();
    }, 1000);
  }

  _stateChange() {
    this.setState({
      time: this._getTime()
    });
  }

  

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.upper}>
          <Text style={styles.upperText}>{this.state.time}</Text>
        </View>
        <View style={styles.middle}>
          <Text>here Alarm List</Text>
        </View>
        <View style={styles.down}>
          <TouchableOpacity onPress={}>
            <MaterialIcons name="add-alarm" size={80} color="white"  />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00008C"
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  down: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 30
  },
  upperText: {
    fontSize: 50,
    color: "white"
  },
  middle: {
    flex: 5
  }
});
