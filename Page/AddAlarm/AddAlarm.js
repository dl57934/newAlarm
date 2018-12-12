import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import style from "./AlarmCss";
import SetDays from "../../components/SetDays";
import SaveAndQuit from "../../components/SaveAndQuit";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Calendar } from "react-native-calendars";

export default class AddAlarm extends Component {
  state = {
    visible: false
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <SaveAndQuit navigation={navigation} />
        <View style={[style.bottomLine, { marginTop: -70 }]} />
        <SetDays navigation={navigation} />
        <View style={[style.bottomLine, { marginTop: -50 }]} />
        <View style={style.content} />
        <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() =>
            this.setState({
              visible: false
            })
          }
        >
          <Calendar />
        </SlidingUpPanel>
      </View>
    );
  }
}

const testStyle = StyleSheet.create({
  leftButton: {},
  rightButton: {}
});
