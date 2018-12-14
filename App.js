import Home from "./Page/Home";
import AddAlarm from "./Page/AddAlarm";
import MusicSelector from "./Page/MusicSelector";
import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);

const View = createStackNavigator(
  {
    Home: { screen: Home },
    AddAlarm: { screen: AddAlarm },
    MusicSelector: { screen: MusicSelector }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    const Layout = createAppContainer(View);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
