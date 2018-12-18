import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Breadcrumb from "react-native-breadcrumb";
import RF from "react-native-responsive-fontsize";

export default class AlarmItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const { time, dayOfWeek, calendar, title } = JSON.parse(item);
    return (
      <TouchableOpacity style={{ marginBottom: "4%" }}>
        <View style={style.data}>
          <View>
            <Text style={style.time}>{time}</Text>
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.dateContainer}>
            <Text style={style.date}>{calendar ? calendar[0] : dayOfWeek}</Text>
          </View>
        </View>
        <View style={style.bottomLine} />
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  data: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomLine: {
    borderBottomColor: "#000070",
    borderBottomWidth: 4,
    width: "100%",
    marginTop: "3%"
  },
  time: {
    color: "white",
    fontSize: RF(3),
    marginBottom: "3%"
  },
  title: {
    color: "white",
    fontSize: RF(2)
  },
  date: {
    color: "white",
    fontSize: RF(2)
  },
  dateContainer: {
    justifyContent: "center"
  }
});
