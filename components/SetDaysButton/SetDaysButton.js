import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RF from "react-native-responsive-fontsize";

const date = new Date();

const SetDaysButton = ({ onPress }) => (
  <View
    style={[
      style.calender,
      {
        backgroundColor: "#000070",
        paddingTop: RF(2.7),
        paddingBottom: RF(2.7)
      }
    ]}
  >
    <Text style={{ color: "white" }}>
      {`내일 ${date.getMonth() + 1}월  ${date.getDate() + 1}일`}
    </Text>
    <TouchableOpacity onPressOut={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginRight: "5%", color: "white" }}>날짜 선택</Text>
        <AntDesign name="calendar" size={RF(2)} style={{ color: "white" }} />
      </View>
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  calender: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    color: "white",
    marginTop: -50
  }
});

export default SetDaysButton;