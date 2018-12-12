import Home from "./Page/Home";
import AddAlarm from "./Page/AddAlarm";
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
