import React, { Component, Fragment } from "react";
import { Text, View, TouchableOpacity, Vibration } from "react-native";
import RF from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export default class SetVibrationButton extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.vibration) {
      Vibration.vibrate(1000);
    }
  }

  render() {
    const { vibration, setVibration } = this.props;
    return (
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity
          onPress={() => {
            setVibration();
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: "3%"
              }}
            >
              <MaterialIcons name="vibration" size={RF(2.7)} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: RF(3),
                  marginLeft: "10%",
                  fontWeight: "600"
                }}
              >
                진동
              </Text>
            </View>
            <Text style={{ color: "white", fontSize: RF(1.7) }}>
              ({vibration ? "설정 완료" : "설정 안 함"})
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
