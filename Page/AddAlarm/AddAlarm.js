import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import style from "./AlarmCss";
import SetDaysButton from "../../components/SetDaysButton";
import SaveAndQuitButton from "../../components/SaveAndQuitButton";
import SlidingUpPanel from "rn-sliding-up-panel";
import WixCalendar from "../../components/Calender";
import Pickers from "../../components/Pickers";
import DayOfWeek from "../../components/DayOfWeek";
import MusicSelectorButton from "../../components/MusicSelectorButton";
import SetTitleButton from "../../components/SetTitleButton";
import SetRepeatButton from "../../components/SetRepeatButton";
import SetTitle from "../../components/SetTitle";
import SetVibrationButton from "../../components/SetVibrationButton";

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
        <SaveAndQuitButton navigation={navigation} />
        <View style={[style.bottomLine, { marginTop: "-18%" }]} />
        <SetDaysButton onPress={visibleCalendar} />
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
          <SetVibrationButton
            vibration={vibration}
            setVibration={setVibration}
          />
          <View style={[style.bottomLine]} />
          <SetRepeatButton />
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
