import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import RF from "react-native-responsive-fontsize";
const MusicSelectorButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MusicSelector")}>
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
          <Text style={{ color: "white", fontSize: RF(3) }}>음악 선택하기</Text>
          <MaterialIcons name="queue-music" size={40} color="white" />
        </View>
        <Text style={{ color: "white", fontSize: RF(1.7), marginTop: "-8%" }}>
          (musicname)
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MusicSelectorButton;
