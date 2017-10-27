import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

import Navigator from "./config/routes";
import { AlertProvider } from "./components/Alert";
import store from "./config/store";

EStyleSheet.build({
  $primaryBlue: "#3b56af",
  $primaryOrange: "#FF8D6F",
  $primaryPurple: "#567EFF",
  $primaryGreen: "#78B233",

  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434"
});

const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

const mapStateToProps = state => ({ nav: state.nav });

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <AppWithNavigation />
    </AlertProvider>
  </Provider>
);
