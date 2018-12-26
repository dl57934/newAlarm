import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import RF from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

export default class AlarmItem extends Component {
  EMPTY_SIZE = 0;
  FIRST_INDEX = 0;
  LAST_INDEX = 6;
  selectDays = "";
  constructor(props) {
    super(props);
    this.state = {
      isCanTrash: false
    };
  }

  render() {
    const { isCanTrash } = this.state;
    const { item, setReduceState, dbKey } = this.props;
    const { time, daysOfWeek, calendar, title } = JSON.parse(item);
    this._resetSelectDays();
    return (
      <View>
        <TouchableOpacity
          style={{ marginBottom: "4%" }}
          onLongPress={() => this._changeIsCanTrash()}
          onPress={() => {
            if (isCanTrash) {
              this._changeIsCanTrash();
            } else {
              setReduceState(item);
              this._goAlarmSetting(dbKey);
            }
          }}
        >
          <View style={style.data}>
            <Fragment
              style={
                this.state.trashView ? { width: "90%" } : { width: "100%" }
              }
            >
              <View style={{ marginLeft: "3%" }}>
                <Text style={style.time}>{time}</Text>
                <Text style={style.title}>{title}</Text>
              </View>
              <View style={style.dateContainer}>
                <Text style={style.date}>
                  {calendar.length !== this.EMPTY_SIZE
                    ? calendar
                    : this._getDays(daysOfWeek).map((value, index) => {
                        if (
                          this._isEveryDay(daysOfWeek) &&
                          index === this.FIRST_INDEX
                        ) {
                          return "매일";
                        } else if (value) {
                          this.selectDays += this._getSelectDays(index) + ",";
                        } else if (index == this.LAST_INDEX) {
                          return this.selectDays.substr(
                            0,
                            this.selectDays.length - 1
                          );
                        }
                      })}
                </Text>
              </View>
            </Fragment>
            {isCanTrash ? (
              <TouchableOpacity
                style={style.trashView}
                onPress={async () => {
                  await this._removeItem(dbKey.toString());
                  this._changeIsCanTrash();
                }}
              >
                <FontAwesome name="trash-o" color="#fff" size={RF(3)} />
              </TouchableOpacity>
            ) : (
              undefined
            )}
          </View>
          <View style={style.bottomLine} />
        </TouchableOpacity>
      </View>
    );
  }

  _resetSelectDays = () => {
    this.selectDays = "";
  };

  _goAlarmSetting = dbKey => {
    const { navigation } = this.props;
    navigation.navigate("AlarmSetting", {
      dbKey: dbKey,
      editor: true
    });
  };

  _changeIsCanTrash = () => {
    this.setState({
      isCanTrash: !this.state.isCanTrash
    });
  };
  _getDays = daysOfWeek => {
    const {
      monday,
      friday,
      saturday,
      sunday,
      tuesday,
      thursday,
      wednesday
    } = daysOfWeek;
    return [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
  };

  _getSelectDays = index => {
    const setDays = ["월", "화", "수", "목", "금", "토", "일"];
    return setDays[index];
  };
  _isEveryDay = daysOfWeek => {
    const {
      monday,
      friday,
      saturday,
      sunday,
      tuesday,
      thursday,
      wednesday
    } = daysOfWeek;
    return monday & tuesday & wednesday & thursday & friday & saturday & sunday;
  };
  _removeItem = async dbKey => {
    return await AsyncStorage.removeItem(dbKey);
  };
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
