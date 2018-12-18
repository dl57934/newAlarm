import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RF from "react-native-responsive-fontsize";

const _getTomorrow = () => {
  const tomorrowDate = new Date();
  return `내일 ${tomorrowDate.getMonth() + 1}월  ${tomorrowDate.getDate() +
    1}일`;
};

const SetDaysButton = ({ onPress, DayOfWeek, date }) => {
  const {
    monday,
    friday,
    saturday,
    sunday,
    tuesday,
    thursday,
    wednesday
  } = DayOfWeek;
  const dayOfWeekResult = [
    monday | tuesday | wednesday | thursday | friday | saturday | sunday,
    monday & tuesday & wednesday & thursday & friday & saturday & sunday
  ];
  const setDays = ["월", "화", "수", "목", "금", "토", "일"];
  const selectedDateInfo = [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  ];
  const checkEmptyDate = JSON.stringify(date);
  let returnedDays = "";
  return (
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
        {!dayOfWeekResult[0] && checkEmptyDate === JSON.stringify({})
          ? _getTomorrow()
          : !dayOfWeekResult[0]
          ? Object.keys(date)
          : selectedDateInfo.map((value, index) => {
              if (dayOfWeekResult[1] && index === 0) {
                return "매일";
              } else if (value) {
                returnedDays += setDays[index] + ",";
                if (setDays[index] === "일") {
                  if (!dayOfWeekResult[1])
                    return returnedDays.substr(0, returnedDays.length - 1);
                }
              } else if (index == 6) {
                return returnedDays.substr(0, returnedDays.length - 1);
              }
            })}
      </Text>
      <TouchableOpacity onPressOut={onPress}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: "5%", color: "white" }}>날짜 선택</Text>
          <AntDesign name="calendar" size={RF(2)} style={{ color: "white" }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
