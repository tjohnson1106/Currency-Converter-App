import React, { PropTypes } from "react";
import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";

const LastConverted = (base, quote, conversionRate, date) => (
  <Text>
    1 {base} = {conversionRate} {quote} as of
    {moment(date).format("MMMM D, YYYY")}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};

export default LastConverted;
