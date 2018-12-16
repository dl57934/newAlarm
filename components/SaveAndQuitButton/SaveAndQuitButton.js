import React from "react";
import { View, TouchableOpacity, StyleSheet, AsyncStorage } from "react-native";
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
    <TouchableOpacity
      onPress={() => {
        setInitialState();
        navigation.goBack();
      }}
    >
      <AntDesign name="back" size={40} style={{ color: "white" }} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={async () => {
        const savingData = JSON.stringify({
          title,
          calendar,
          daysOfWeek,
          musicInfo,
          vibration,
          repeat: repeatInterval.interval[0],
          interval: repeatInterval.repeat[1],
          time
        });

        try {
          const keys = await AsyncStorage.getAllKeys();
          await AsyncStorage.setItem(`${keys.length}`, savingData);
        } catch (error) {
          console.log(error);
        }
        setInitialState();
        navigation.navigate("Home", { user: "Lucy" });
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
