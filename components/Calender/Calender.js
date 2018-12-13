import { Calendar, LocaleConfig } from "react-native-calendars";
import React from "react";
import { View, StyleSheet } from "react-native";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"]
};

LocaleConfig.defaultLocale = "ko";
const WixCalendar = ({ setDate, settedDate }) => {
  return (
    <View style={style.test}>
      <Calendar
        LocaleConfig={LocaleConfig}
        minDate={Date()}
        onDayPress={day => {
          setDate(day);
        }}
        markedDates={settedDate}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType="simple"
      />
    </View>
  );
};

const style = StyleSheet.create({
  test: {
    flexDirection: "column",
    marginTop: "70%"
  }
});

export default WixCalendar;
