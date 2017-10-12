import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  container: {
    alignItems: "center"
  },
  containerImage: {
    alignItems: "center",
    width: "$largeContainerSize",
    height: "$largeContainerSize"
  },
  logo: {
    width: "$largeImageSize"
  },
  text: {
    color: "$white",
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: "600"
  }
});
