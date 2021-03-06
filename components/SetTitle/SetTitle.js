import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default class SetTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onClick(...parameter) {
    parameter[0]();
    parameter[1](this.state.text);
  }
  render() {
    const { visibleSetTitleView, setTitle } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <TextInput
          style={{
            height: "5%",
            width: "50%",
            borderColor: "gray",
            borderWidth: 1,
            color: "#00008C"
          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="완료"
          color="#00008C"
          onPress={() => this._onClick(visibleSetTitleView, setTitle)}
        />
      </View>
    );
  }
}
