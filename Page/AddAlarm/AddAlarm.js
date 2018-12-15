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
import SetTitleButton from "../../components/SetTitleButton";
import SetTitle from "../../components/SetTitle";
import SetVibration from "../../components/SetVibration";
import SetRepeat from "../../components/SetRepeat";

export default class AddAlarm extends Component {
  render() {
    const {
      navigation,
      visibleCalendar,
      calendar,
      title,
      visibleTitle,
      musicInfo,
      vibration,
      setDate,
      settedDate,
      setTime,
      setMusic,
      setTitle,
      visibleSetTitle,
      setVibration
    } = this.props;
    return (
      <View style={style.container}>
        <SaveAndQuit navigation={navigation} />
        <View style={[style.bottomLine, { marginTop: "-18%" }]} />
        <SetDays onPress={visibleCalendar} />
        <View style={[{ marginTop: "-12%" }, style.bottomLine]} />
        <View style={style.content}>
          <View
            style={
              Platform.OS === "ios" ? style.iosPickers : style.androidPickers
            }
          >
            <Pickers setTime={setTime} />
          </View>
          <DayOfWeek />
          <SetTitleButton title={title} visibleSetTitleView={visibleSetTitle} />

          <View style={[style.bottomLine]} />
          <MusicSelectorButton musicInfo={musicInfo} setMusic={setMusic} />
          <View style={[style.bottomLine]} />
          <SetVibration vibration={vibration} setVibration={setVibration} />
          <View style={[style.bottomLine]} />
          <SetRepeat />
        </View>
        <SlidingUpPanel
          visible={calendar}
          onRequestClose={visibleCalendar}
          startCollapsed
        >
          <WixCalendar setDate={setDate} settedDate={settedDate} />
        </SlidingUpPanel>
        <SlidingUpPanel visible={visibleTitle}>
          <SetTitle visibleSetTitleView={visibleSetTitle} setTitle={setTitle} />
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
