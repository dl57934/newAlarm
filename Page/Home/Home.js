import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AlarmItem from "../../components/AlarmItem";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentWillMount = async () => {
    const _DBKeys = await AsyncStorage.getAllKeys();
    for (let key of _DBKeys) {
      const value = await AsyncStorage.getItem(key);
      console.log(value);
      this.dbData.push(value);
    }
    this._stateTimerChange();
    setInterval(() => {
      this._stateTimerChange();
    }, 1000);
  };

  componentWillUpdate = async () => {
    const _DBKeys = await AsyncStorage.getAllKeys();
    if (_DBKeys.length !== this.dbData.length) {
      const value = AsyncStorage.getItem(_DBKeys[_DBKeys.length]);
      this.dbData.push(value);
    }
    this.setState({
      isLoading: true
    });
  };

  render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;
    return isLoading ? (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.upper}>
          <Text style={styles.upperText}>{this.state.time}</Text>
        </View>
        <View style={styles.middle}>
          {this.dbData.map(data => (
            <View>
              <AlarmItem item={data} />
            </View>
          ))}
        </View>
        <View style={styles.down}>
          <TouchableOpacity onPress={() => navigation.navigate("AddAlarm")}>
            <MaterialIcons name="add-alarm" size={80} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }
  dbData = [];
  _stateTimerChange() {
    this.setState({
      time: this._getTime()
    });
  }

  _getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    hours > 12 ? (hours = hours - 12) : hours === 0 ? (hours = 12) : hours;
    minute < 10 ? (minute = `0${minute}`) : minute;
    return `${hours}:${minute}`;
  }
}

export default Home;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#a0a0a0",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#00008C"
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  down: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 30
  },
  upperText: {
    fontSize: 50,
    color: "white"
  },
  middle: {
    flex: 5
  }
});
