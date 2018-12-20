import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Breadcrumb from "react-native-breadcrumb";
import RF from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

export default class AlarmItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trashView: false
    };
  }

  render() {
    const { item, dbKey, setItemsState, navigation } = this.props;
    const { time, daysOfWeek, calendar, title } = JSON.parse(item);

    const setDays = ["월", "화", "수", "목", "금", "토", "일"];
    const {
      monday,
      friday,
      saturday,
      sunday,
      tuesday,
      thursday,
      wednesday
    } = daysOfWeek;
    const selectedDateInfo = [
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    ];
    let returnedDays = "";
    const dayOfWeekResult =
      monday & tuesday & wednesday & thursday & friday & saturday & sunday;
    return (
      <TouchableOpacity
        style={{ marginBottom: "4%" }}
        onLongPress={() => {
          this.setState({
            trashView: !this.state.trashView
          });
        }}
        onPress={() => {
          if (this.state.trashView) {
            this.setState({
              trashView: !this.state.trashView
            });
          } else {
            setItemsState(item); // addAlarm 으로 들어가기
            navigation.navigate("AddAlarm");
          }
        }}
      >
        <View style={style.data}>
          <Fragment
            style={this.state.trashView ? { width: "90%" } : { width: "100%" }}
          >
            <View style={{ marginLeft: "3%" }}>
              <Text style={style.time}>{time}</Text>
              <Text style={style.title}>{title}</Text>
            </View>
            <View style={style.dateContainer}>
              <Text style={style.date}>
                {calendar.length !== 0
                  ? calendar
                  : selectedDateInfo.map((value, index) => {
                      if (dayOfWeekResult && index === 0) {
                        return "매일";
                      } else if (value) {
                        returnedDays += setDays[index] + ",";
                      } else if (index == 6) {
                        return returnedDays.substr(0, returnedDays.length - 1);
                      }
                    })}
              </Text>
            </View>
          </Fragment>
          {this.state.trashView ? (
            <TouchableOpacity
              style={style.trashView}
              onPress={async () => {
                await AsyncStorage.removeItem(dbKey.toString());
                this.setState({
                  trashView: !this.state.trashView
                });
              }}
            >
              <FontAwesome name="trash-o" color="#fff" size="30%" />
            </TouchableOpacity>
          ) : (
            undefined
          )}
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
  },
  trashView: {
    backgroundColor: "#FF9900",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "3%",
    marginLeft: "-20%"
  }
});
