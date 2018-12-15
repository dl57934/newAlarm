import React, { Fragment } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import RF from "react-native-responsive-fontsize";
import { DocumentPicker } from "expo";
import SetTitle from "../SetTitle";
import SlidingUpPanel from "rn-sliding-up-panel";

const _pickDocument = async setMusic => {
  let result = await DocumentPicker.getDocumentAsync({
    type: "audio/*",
    copyToCacheDirectory: false
  });
  setMusic({ uri: result.uri, name: result.name });
  alert(result.name);
};

const MusicSelectorButton = ({ musicInfo, setMusic }) => {
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => _pickDocument(setMusic)}
        style={{ flex: 0.5 }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: "5%"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "5%",
              marginBottom: "5%"
            }}
          >
            <Text style={{ color: "white", fontSize: RF(3) }}>
              음악 선택하기
            </Text>
            <MaterialIcons name="queue-music" size={40} color="white" />
          </View>
          <Text style={{ color: "white", fontSize: RF(1.7), marginTop: "-8%" }}>
            ({musicInfo.name})
          </Text>
        </View>
      </TouchableOpacity>
      <SlidingUpPanel>
        <SetTitle />
      </SlidingUpPanel>
    </Fragment>
  );
};

export default MusicSelectorButton;
