import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";
export default class DayOfWeek extends Component {
  componentWillMount() {
    this.setState({
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      days: [
        { sunday: "일" },
        { monday: "월" },
        { tuesday: "화" },
        { wednesday: "수" },
        { thursday: "목" },
        { friday: "금" },
        { saturday: "토" }
      ]
    });
  }
  _changeSelect = day => {
    this.setState({
      [day]: !this.state[day]
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: "#ffff", paddingTop: "2%", flex: 1 }}>
        <Text
          style={{
            fontSize: RF(3.1),
            marginBottom: "3%",
            fontWeight: "600",
            marginLeft: "4%"
          }}
        >
          반복 요일
        </Text>
        <View style={dayStyle.days}>
          {this.state.days.map((day, index) => {
            const keyName = Object.keys(day);
            const value = day[keyName];
            return (
              <TouchableOpacity
                key={index}
                onPressOut={() => this._changeSelect(keyName)}
              >
                <View
                  style={[
                    dayStyle.views,
                    {
                      borderColor: this.state[keyName]
                        ? value === "일"
                          ? "red"
                          : value === "토"
                          ? "blue"
                          : "black"
                        : "white"
                    }
                  ]}
                >
                  <Text
                    style={
                      value === "일"
                        ? dayStyle.sunday
                        : value === "토"
                        ? dayStyle.saturday
                        : dayStyle.normal
                    }
                  >
                    {value}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const dayStyle = StyleSheet.create({
  days: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: "6%"
  },
  views: {
    borderRadius: 20,
    borderWidth: 1.5,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4
  },
  sunday: {
    color: "red",
    fontSize: RF(2),
    fontWeight: "700"
  },
  normal: { color: "black", fontSize: RF(2), fontWeight: "700" },
  saturday: { color: "blue", fontSize: RF(2), fontWeight: "700" }
});
