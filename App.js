import Home from "./Page/Home";
import AlarmSetting from "./Page/AlarmSetting";
import SetRepeat from "./Page/SetRepeat";
import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);

const View = createSwitchNavigator(
  {
    Home: { screen: Home },
    AlarmSetting: { screen: AlarmSetting },
    SetRepeat: { screen: SetRepeat }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    resetOnBlur: false
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
