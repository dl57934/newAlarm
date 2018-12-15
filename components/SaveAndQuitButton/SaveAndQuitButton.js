import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SaveAndQuitButton = ({ navigation }) => (
  <View style={style.upper}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="back" size={40} style={{ color: "white" }} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="check" size={40} style={{ color: "white" }} />
    </TouchableOpacity>
  </View>
);

export default SaveAndQuitButton;

const style = StyleSheet.create({
  upper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginTop: 40
  }
});
