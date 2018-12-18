import React, { Component } from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
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
      time,
      title,
      visibleTitle,
      musicInfo,
      vibration,
      setDate,
      settedDate,
      setTime,
      setMusic,
      setTitle,
      setInitialState,
      visibleSetTitle,
      setVibration,
      repeatInterval,
      setDaysOfWeek,
      daysOfWeek
    } = this.props;

    return (
      <View style={style.container}>
        <StatusBar hidden />
        <SaveAndQuitButton
          navigation={navigation}
          title={title}
          calendar={settedDate}
          daysOfWeek={daysOfWeek}
          musicInfo={musicInfo}
          vibration={vibration}
          repeatInterval={repeatInterval}
          time={time}
          setInitialState={setInitialState}
        />
        <SetDaysButton
          onPress={visibleCalendar}
          DayOfWeek={daysOfWeek}
          date={settedDate}
        />
        <View style={style.content}>
          <View
            style={
              Platform.OS === "ios" ? style.iosPickers : style.androidPickers
            }
          >
            <Pickers setTime={setTime} />
          </View>
          <DayOfWeek
            daysOfWeek={daysOfWeek}
            onPress={day => {
              setDate({ dateString: "remove" });
              setDaysOfWeek(day);
            }}
          />
          <SetTitleButton title={title} visibleSetTitleView={visibleSetTitle} />

          <View style={[style.bottomLine]} />
          <MusicSelectorButton musicInfo={musicInfo} setMusic={setMusic} />
          <View style={[style.bottomLine]} />
          <SetVibrationButton
            vibration={vibration}
            setVibration={setVibration}
          />
          <View style={[style.bottomLine]} />
          <SetRepeatButton
            navigation={navigation}
            repeatInterval={repeatInterval}
          />
        </View>
        <SlidingUpPanel
          visible={calendar}
          onRequestClose={() => {
            visibleCalendar();
            if (Object.keys(settedDate).length >= 1)
              setDaysOfWeek({ remove: "remove" });
          }}
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
