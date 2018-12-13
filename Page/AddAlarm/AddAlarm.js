import React, { Component } from "react";
import { View, StyleSheet, Picker, TextInput, Text } from "react-native";
import style from "./AlarmCss";
import SetDays from "../../components/SetDays";
import SaveAndQuit from "../../components/SaveAndQuit";
import SlidingUpPanel from "rn-sliding-up-panel";
import WixCalendar from "../../components/Calender";
import Pickers from "../../components/Pickers";

export default class AddAlarm extends Component {
  componentWillMount() {}

  render() {
    const {
      navigation,
      visibleCalendar,
      calendar,
      setDate,
      settedDate
    } = this.props;
    return (
      <View style={style.container}>
        <SaveAndQuit navigation={navigation} />
        <View style={[style.bottomLine, { marginTop: -70 }]} />
        <SetDays navigation={navigation} onPress={visibleCalendar} />
        <View style={[style.bottomLine, { marginTop: -50 }]} />
        <View style={style.content}>
          <View style={style.pickers}>
            <Pickers />
          </View>
          {/* <View style={[style.bottomLine, { marginTop: "-90%" }]} />
          <View style={{ flex: 1 }} /> */}
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
  rightButton: {}
});
