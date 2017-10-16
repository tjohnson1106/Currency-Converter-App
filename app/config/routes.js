import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        //accessing title which is a string and is either base or quote
        headerTitle: navigation.state.params.title
      })
    }
    //extra config variables
  },
  {
    mode: "modal",

    cardStyle: {
      paddingTop: StatusBar.currentHeight
    }
  }
);
