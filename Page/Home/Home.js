import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AlarmItem from "../../components/AlarmItem";

class Home extends Component {
  dbData = [];
  dbKeys = [];

  setData = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentWillMount = async () => {
    this._setNewDBData();
    this._stateTimerChange();
    setInterval(() => {
      this._checkDeleteItem();
    }, 2000);
    setInterval(() => {
      this._stateTimerChange();
    }, 1000);
  };

  _checkChange;

  render() {
    const { navigation, setItemsState } = this.props;
    const { isLoading } = this.state;
    return isLoading ? (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.upper}>
          <Text style={styles.upperText}>{this.state.time}</Text>
        </View>
        <View style={{ height: "50%" }}>
          <ScrollView
            ref="itemScrollView"
            onScrollEndDrag={e => {
              this.refs.itemScrollView.scrollTo({
                x: 0,
                y: e.nativeEvent.contentOffset.y
              });
            }}
            scrollEventThrottle={16}
          >
            {this.dbData.map((data, index) => {
              return (
                <AlarmItem
                  item={data}
                  key={index}
                  dbKey={this.dbKeys[index]}
                  setItemsState={setItemsState}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.down}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddAlarm", { editor: false })}
          >
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

  _stateTimerChange() {
    this.setState({
      time: this._getTime()
    });
  }

  _setNewDBData = async () => {
    const _DBKeys = await AsyncStorage.getAllKeys();
    this.dbKeys = _DBKeys;
    for (const key of _DBKeys) {
      const value = await AsyncStorage.getItem(key);
      await this.dbData.push(value);
    }
    this.setState({
      isLoading: true
    });
  };

  _checkDeleteItem = async () => {
    const _DBKeys = await AsyncStorage.getAllKeys();
    this.dbKeys = _DBKeys;
    if (this.dbData.length > _DBKeys.length) {
      this.dbData = [];
      for (const key of _DBKeys) {
        const value = await AsyncStorage.getItem(key);
        await this.dbData.push(value);
      }
    }
  };

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
  middle: {}
});
