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
    backBehavior: "none",
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    headerMode: "none"
  }
);

const App = createAppContainer(views);

export default App;
