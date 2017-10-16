import React, { Component, PropTypes } from "react";
import { ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ListItem, Separator } from "../components/List";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePressThemes = () => {
    this.props.navigation.navigate("Themes");
  };

  handleSitePress = () => {
    console.log("press site");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons
              name="ios-arrow-forward"
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem text="Fixer.io" onPress={this.handleSitePress} />
      </ScrollView>
    );
  }
}
export default Options;
