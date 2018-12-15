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
    const { visibleSetTitleView, title, setTitle } = this.props;
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
                <Text style={{ color: "white", fontSize: RF(3) }}>제목</Text>
                <Entypo name="pencil" size="22%" color="white" />
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
