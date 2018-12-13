import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SetDays = ({ onPress }) => (
  <View style={style.calender}>
    <Text style={{ color: "white" }}>12월 13일</Text>
    <TouchableOpacity onPressOut={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginRight: 10, color: "white" }}>날짜 선택</Text>
        <AntDesign name="calendar" size={20} style={{ color: "white" }} />
      </View>
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  calender: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    color: "white",
    marginTop: -50
  }
});

export default SetDays;
