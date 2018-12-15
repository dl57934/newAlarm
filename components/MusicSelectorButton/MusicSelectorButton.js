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
        style={{ flex: 0.5, justifyContent: "center", alignContent: "center" }}
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
              marginTop: "5%"
            }}
          >
            <MaterialIcons name="queue-music" size={RF(2.7)} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: RF(3),
                fontWeight: "600",
                marginLeft: "2%"
              }}
            >
              음악 선택하기
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: RF(1.7) }}>
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
