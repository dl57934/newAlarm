import React, { Component, Fragment } from "react";
import { Picker, PickerIOS } from "react-native";
const hours = [];
const minutes = [];
for (let i = 1; i <= 12; i++) hours.push(i);
for (let i = 1; i < 60; i++) minutes.push(i);

const Pickers = () => {
  return (
    <Fragment>
      <Picker
        style={{ height: 50, width: 100 }}
        itemStyle={{ color: "white" }}
        mode="dialog"
      >
        <Picker.Item label="AM" value="AM" />
        <Picker.Item label="PM" value="PM" />
      </Picker>
      <Picker
        style={{ height: 50, width: 100 }}
        itemStyle={{ color: "white" }}
        mode="dialog"
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
        style={{ height: 50, width: 100 }}
        itemStyle={{ color: "white" }}
        mode="dialog"
      >
        {minutes.map((minute, index) => (
          <Picker.Item
            key={index}
            label={minute.toString()}
            value={minute.toString()}
          />
        ))}
      </Picker>
    </Fragment>
  );
};

export default Pickers;
