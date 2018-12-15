import React, { Component, Fragment } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import RF from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";
class SetRepeatButton extends Component {
  render() {
    return (
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: "3%"
              }}
            >
              <FontAwesome name="repeat" size={RF(2.7)} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: RF(3),
                  marginLeft: "10%",
                  fontWeight: "600"
                }}
              >
                반복도 정하기
              </Text>
            </View>
            <Text style={{ color: "white", fontSize: RF(1.7) }}>(설정)</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SetRepeatButton;
