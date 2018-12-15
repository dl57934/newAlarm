import React, { Component, Fragment } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import RF from "react-native-responsive-fontsize";
import { Entypo, TextInput } from "@expo/vector-icons";

export default class SetTitleButton extends Component {
  componentWillMount() {
    this.setState({
      text: ""
    });
  }

  render() {
    const { visibleSetTitleView, title } = this.props;
    return (
      <Fragment>
        <TouchableOpacity
          style={{ flex: 0.5 }}
          onPress={() => visibleSetTitleView()}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Fragment>
              <View style={{ flexDirection: "row" }}>
                <Entypo name="pencil" size={RF(2.7)} color="white" />
                <Text
                  style={{
                    color: "white",
                    fontSize: RF(3),
                    marginLeft: "2%",
                    fontWeight: "600"
                  }}
                >
                  제목
                </Text>
              </View>
              <Text style={{ color: "white", fontSize: RF(1.7) }}>
                ({title})
              </Text>
            </Fragment>
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
