import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AlarmItem from "../../components/AlarmItem";
import PresentClock from "../../components/PresentClock";

export default class Home extends Component {
  dbItem = [];
  dbKeys = [];

  componentWillMount = async () => {
    setInterval(() => {
      this._checkDeleteItem();
    }, 2000);
    await this._setNewDB();
  };

  render() {
    const { navigation, setReduceState } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <PresentClock />
        <View style={{ height: "50%" }}>
          <ScrollView>
            {this.dbItem.map((item, index) => (
              <AlarmItem
                item={item}
                key={index}
                dbKey={this.dbKeys[index]}
                setReduceState={setReduceState}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.down}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AlarmSetting", { editor: false })
            }
          >
            <MaterialIcons name="add-alarm" size={80} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _refresh() {
    this.setState({});
  }

  _resetDBItem = () => {
    this.dbItem = [];
  };

  _setNewDB = async () => {
    this.dbKeys = await this._getDBKeys();
    for (const key of this.dbKeys) await this._setDBItem(key);
    this._refresh();
  };

  _checkDeleteItem = async () => {
    this.dbKeys = await this._getDBKeys();
    if (this.dbItem.length > this.dbKeys.length) {
      this._resetDBItem();
      for (const key of this.dbKeys) this._setDBItem(key);
      this._refresh();
    }
  };

  _setDBItem = async key => {
    return await this.dbItem.push(await this._getDBItem(key));
  };

  _getDBItem = async key => {
    return await AsyncStorage.getItem(key);
  };

  _getDBKeys = async () => {
    return await AsyncStorage.getAllKeys();
  };
}

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
