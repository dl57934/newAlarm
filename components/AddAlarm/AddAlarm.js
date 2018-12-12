import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class AddAlarm extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.upper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={40} style={style.backButton} />
          </TouchableOpacity>
          <View style={style.bottomLine} />
        </View>
        <View style={style.content} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00008C"
  },
  bottomLine: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%"
  },
  upper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  content: {
    flex: 5
  },
  backButton: {
    color: "#ffffff",
    marginTop: 50,
    marginRight: 30
  }
});
