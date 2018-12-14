import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import style from "./AlarmCss";
import SetDays from "../../components/SetDays";
import SaveAndQuit from "../../components/SaveAndQuit";
import SlidingUpPanel from "rn-sliding-up-panel";
import WixCalendar from "../../components/Calender";
import Pickers from "../../components/Pickers";
import DayOfWeek from "../../components/DayOfWeek";
import MusicSelectorButton from "../../components/MusicSelectorButton";

export default class AddAlarm extends Component {
  render() {
    const {
      navigation,
      visibleCalendar,
      calendar,
      setDate,
      settedDate,
      setTime
    } = this.props;
    return (
      <View style={style.container}>
        <SaveAndQuit navigation={navigation} />
        <View style={[style.bottomLine, { marginTop: "-20%" }]} />
        <SetDays onPress={visibleCalendar} />
        <View style={[{ marginTop: "-14%" }, style.bottomLine]} />
        <View style={style.content}>
          <View
            style={
              Platform.OS === "ios" ? style.iosPickers : style.androidPickers
            }
          >
            <Pickers setTime={setTime} />
          </View>
          <View style={[{ marginTop: "-55%" }]} />
          <DayOfWeek />
          <View style={[style.bottomLine, { borderBottomColor: "black" }]} />
          <View style={{ flex: 1 }}>
            <MusicSelectorButton navigation={navigation} />
            <View style={[style.bottomLine]} />
          </View>
        </View>

        <SlidingUpPanel
          visible={calendar}
          onRequestClose={visibleCalendar}
          startCollapsed
        >
          <WixCalendar setDate={setDate} settedDate={settedDate} />
        </SlidingUpPanel>
      </View>
    );
  }
}

const testStyle = StyleSheet.create({
  leftButton: {},
  rightButton: {},
  selectDayOfWeek: {
    flex: 1
  }
});
