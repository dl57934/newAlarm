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
  iosPickers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "-5%"
  },
  androidPickers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "-16%"
  }
});

export default style;
