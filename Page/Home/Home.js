import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  FlatList
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AlarmItem from "../../components/AlarmItem";
import PresentClock from "../../components/PresentClock";

class Home extends Component {
  dbData = [];
  dbKeys = [];

  componentWillMount = async () => {
    this._setNewDBData();
    this._modifyTimerChange();
    setInterval(() => {
      this._checkDeleteItem();
    }, 2000);
  };

  render() {
    const { navigation, setItemsState } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <PresentClock />
        <View style={{ height: "50%" }}>
          <FlatList
            data={this.dbData}
            renderItem={({ item, index }) => (
              <AlarmItem
                item={item}
                key={index}
                dbKey={this.dbKeys[index]}
                setItemsState={setItemsState}
                navigation={navigation}
              />
            )}
          />
        </View>
        <View style={styles.down}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddAlarm", { editor: false })}
          >
            <MaterialIcons name="add-alarm" size={80} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _setNewDBData = async () => {
    const _DBKeys = await AsyncStorage.getAllKeys();
    this.dbKeys = _DBKeys;
    for (const key of _DBKeys) {
      const value = await AsyncStorage.getItem(key);
      await this.dbData.push(value);
    }
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
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00008C"
  },
  down: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 30
  }
});
