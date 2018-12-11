import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.upperText}>Here Now's Time</Text>
        </View>
        <View style={styles.middle}>
          <Text>here Alarm List</Text>
        </View>
        <View style={styles.down}>
          <TouchableOpacity>
            <MaterialIcons name="add-alarm" size={80} color="white" />
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
    fontSize: 30
  },
  middle: {
    flex: 5
  }
});
