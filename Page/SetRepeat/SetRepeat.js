import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";
import RF from "react-native-responsive-fontsize";
import { CheckBox } from "react-native-elements";

export default class SetRepeat extends Component {
  constructor(props) {
    super(props);
    const { repeatInterval } = this.props;
    console.log(repeatInterval);
    this.state = {
      intervals: ["5", "10", "15", "30"],
      repeats: ["3", "5", "계속"],
      intervalCheck: true,
      repeatCheck: true,
      repeatIndex: repeatInterval.repeat[1],
      intervalIndex: repeatInterval.interval[1]
    };
  }

  _intervalCheck(intervalIndex) {
    this.setState({
      intervalIndex
    });
  }

  _repeatCheck(repeatIndex) {
    this.setState({
      repeatIndex
    });
  }

  render() {
    const {
      intervals,
      repeats,
      intervalCheck,
      repeatCheck,
      intervalIndex,
      repeatIndex
    } = this.state;
    const { setRepeatInterval, navigation } = this.props;
    return (
      <View style={Style.container}>
        <StatusBar hidden />
        <View style={Style.interval}>
          <Text style={Style.intervalTitle}>간격</Text>
          <View style={[Style.bottomLine, { marginBottom: "3%" }]} />
          {intervals.map((interval, index) => (
            <Fragment>
              <TouchableOpacity
                onPressOut={() => this._intervalCheck(index)}
                style={{ width: "100%", flexDirection: "row" }}
              >
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={{
                    backgroundColor: "#00008C",
                    borderColor: "#00008C",
                    color: "white"
                  }}
                  onPress={() => this._intervalCheck(index)}
                  checked={intervalIndex === index ? intervalCheck : undefined}
                  uncheckedColor="white"
                  checkedColor="yellow"
                />
                <Text style={[Style.intervalItem, { marginBottom: "3%" }]}>
                  {interval + "분"}
                </Text>
              </TouchableOpacity>
              <View style={[Style.itemBottomLine, { marginBottom: "3%" }]} />
            </Fragment>
          ))}
        </View>
        <View style={Style.repeat}>
          <Text style={Style.repeatTitle}>반복</Text>
          <View style={[Style.bottomLine, { marginBottom: "3%" }]} />
          {repeats.map((repeat, index) => (
            <Fragment>
              <TouchableOpacity
                onPressOut={() => this._repeatCheck(index)}
                style={{
                  width: "100%",
                  flexDirection: "row"
                }}
              >
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  onPress={() => this._repeatCheck(index)}
                  checked={index === repeatIndex ? repeatCheck : undefined}
                  containerStyle={{
                    backgroundColor: "#00008C",
                    borderColor: "#00008C",
                    color: "white"
                  }}
                  uncheckedColor="white"
                  checkedColor="yellow"
                />
                <Text style={[Style.repeatItem, { marginBottom: "3%" }]}>
                  {index === 2 ? repeat : `${repeat}회`}
                </Text>
              </TouchableOpacity>
              <View style={[Style.itemBottomLine, { marginBottom: "3%" }]} />
            </Fragment>
          ))}
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            bottom: 40,
            width: "100%"
          }}
          onPressOut={() => {
            setRepeatInterval(
              [intervals[intervalIndex], intervalIndex],
              [repeats[repeatIndex], repeatIndex]
            );
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: "30%", fontWeight: "600", color: "white" }}>
            확인
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00008C"
  },
  interval: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "3%"
  },
  intervalTitle: {
    fontSize: RF(4),
    color: "white",
    marginLeft: "3%",
    marginTop: "10%"
  },
  intervalItem: {
    color: "white",
    fontSize: RF(3),
    marginTop: "4%"
  },
  repeat: { flex: 1, alignItems: "flex-start", justifyContent: "flex-start" },
  repeatTitle: { fontSize: RF(4), color: "white", marginLeft: "3%" },
  repeatItem: { color: "white", fontSize: RF(3), marginTop: "4%" },
  bottomLine: {
    borderBottomColor: "#000070",
    borderBottomWidth: 4,
    width: "100%",
    marginTop: "3%"
  },
  itemBottomLine: {
    borderBottomColor: "#000070",
    borderBottomWidth: 2,
    width: "85%",
    marginLeft: "15%"
  }
});
