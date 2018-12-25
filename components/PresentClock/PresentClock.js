import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class PresentClock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: this._getTime() };
  }

  componentWillMount() {
    setInterval(() => {
      this._modifyTime();
    }, 1000);
  }

  render() {
    return (
      <View style={style.clockContainer}>
        <Text style={style.clockText}> {this.state.time} </Text>
      </View>
    );
  }

  _getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    hours > 12 ? (hours = hours - 12) : hours === 0 ? (hours = 12) : hours;
    minute < 10 ? (minute = `0${minute}`) : minute;
    return `${hours}:${minute}`;
  }

  _modifyTime() {
    this.setState({
      time: this._getTime()
    });
  }
}

const style = StyleSheet.create({
  clockContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  clockText: {
    fontSize: 50,
    color: "white"
  }
});
