import React, { Component } from "react";
import { View, Image, Text, Keyboard, Animated } from "react-native";

import styles from "./styles";

class Logo extends Component {
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      "keyboardWill",
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    console.log("keyboard did show");
  };

  keyboardHide = () => {
    console.log("keyboard did hide");
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={styles.containerImage}
          source={require("./images/background.png")}
        >
          <ImageAnimated.Image
            resizeMode="contain"
            style={styles.logo}
            source={require("./images/logo.png")}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
