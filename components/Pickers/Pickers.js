import React, { Component, Fragment } from "react";
import { Picker, View } from "react-native";
const hours = [];
const minutes = [];
for (let i = 1; i <= 12; i++) hours.push(i);
for (let i = 1; i < 60; i++) minutes.push(i);

let type = "AM";
const setHour = "1";
const setMinute = "1";

class Pickers extends Component {
  componentWillMount() {
    this.setState({
      type: "AM",
      setHour: "1",
      setMinute: "1"
    });
  }
  render() {
    let { type, setHour, setMinute } = this.state;
    const { setTime } = this.props;
    return (
      <View style={{ flexDirection: "row" }}>
        <Picker
          style={{ height: 50, width: 100, color: "white" }}
          itemStyle={{ color: "white" }}
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) => {
            setTime(`${itemValue} ${setHour} ${setMinute}`);
            this.setState({
              type: itemValue.toString()
            });
          }}
        >
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="PM" value="PM" />
        </Picker>
        <Picker
          style={{ height: 50, width: 100, color: "white" }}
          itemStyle={{ color: "white" }}
          selectedValue={setHour}
          onValueChange={(itemValue, itemIndex) => {
            setTime(`${type} ${itemValue} ${setMinute}`);
            this.setState({
              setHour: itemValue.toString()
            });
          }}
        >
          {hours.map((hour, index) => (
            <Picker.Item
              key={index}
              label={hour.toString()}
              value={hour.toString()}
            />
          ))}
        </Picker>
        <Picker
          style={{ height: 50, width: 100, color: "white" }}
          itemStyle={{ color: "white" }}
          selectedValue={setMinute}
          onValueChange={(itemValue, itemIndex) => {
            setTime(`${type} ${setHour} ${itemValue}`);
            this.setState({
              setMinute: itemValue.toString()
            });
          }}
        >
          {minutes.map((minute, index) => (
            <Picker.Item
              key={index}
              label={minute.toString()}
              value={minute.toString()}
            />
          ))}
        </Picker>
      </View>
    );
  }
}

export default Pickers;
