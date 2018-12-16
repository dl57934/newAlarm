import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SaveAndQuitButton = ({
  navigation,
  title,
  calendar,
  daysOfWeek,
  musicInfo,
  vibration,
  repeatInterval,
  time,
  setInitialState
}) => (
  <View style={style.upper}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="back" size={40} style={{ color: "white" }} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        console.log({
          title,
          calendar,
          daysOfWeek,
          musicInfo,
          vibration,
          interval: repeatInterval.interval[0],
          repeat: repeatInterval.repeat[1],
          time
        });
        setInitialState();
        navigation.goBack();
      }}
    >
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
    marginTop: "10%",
    marginBottom: "-10%"
  }
});
