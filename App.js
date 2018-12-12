import Home from "./components/Home";
import AddAlarm from "./components/AddAlarm";
import { createStackNavigator, createAppContainer } from "react-navigation";

const views = createStackNavigator(
  {
    HomeScreen: { screen: Home },
    AddAlarm: { screen: AddAlarm }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

const App = createAppContainer(views);

export default App;
