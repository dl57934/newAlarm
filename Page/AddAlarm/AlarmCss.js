import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00008C"
  },
  bottomLine: {
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    width: "100%"
  },
  content: {
    flex: 5
  },
  pickers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "-5%"
  }
});

export default style;
