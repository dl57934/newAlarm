import React from "react";
import { View, TouchableOpacity, StyleSheet, AsyncStorage } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const _getTomorrow = () => {
  const tomorrowDate = new Date();
  return `${tomorrowDate.getFullYear()}-${tomorrowDate.getMonth() +
    1}-${tomorrowDate.getDate() + 1}`;
};
const SaveAndQuitButton = ({
  navigation,
  title,
  calendar,
  daysOfWeek,
  musicInfo,
  vibration,
  repeatInterval,
  time,
  setInitialState,
  editor,
  dbKey
}) => {
  const dayOfWeekResult =
    daysOfWeek.monday |
    daysOfWeek.tuesday |
    daysOfWeek.wednesday |
    daysOfWeek.thursday |
    daysOfWeek.friday |
    daysOfWeek.saturday |
    daysOfWeek.sunday;
  return (
    <View style={style.upper}>
      <TouchableOpacity
        onPress={() => {
          setInitialState();
          navigation.navigate("Home", { reload: false });
        }}
      >
        <AntDesign name="back" size={40} style={{ color: "white" }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          const savingData = _changeToJsonStringPy({
            title,
            calendar:
              _changeToJsonStringPy({}) === _changeToJsonStringPy(calendar) &&
              !dayOfWeekResult
                ? _getTomorrow()
                : Object.keys(calendar),
            daysOfWeek,
            musicInfo,
            vibration,
            repeat: repeatInterval.repeat[0],
            interval: repeatInterval.interval[0],
            time,
            active: true
          });

          try {
            const keys = await AsyncStorage.getAllKeys();

            if (editor) {
              console.log(dbKey);
              await AsyncStorage.mergeItem(dbKey, savingData);
              setInitialState();
              navigation.navigate("Home", { reload: true });
            } else {
              await AsyncStorage.setItem(
                `${keys[keys.length - 1] + 1}`,
                savingData
              );
              setInitialState();
              navigation.navigate("Home", { reload: false });
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <AntDesign name="check" size={40} style={{ color: "white" }} />
      </TouchableOpacity>
    </View>
  );
};

const _changeToJsonStringPy = inputData => {
  return JSON.stringify(inputData);
};

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
