import React, { Component, PropTypes } from "react";
import { Text, FlatList, View, StatusBar } from "react-native";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";
import { connect } from "react-redux";

import { ListItem, Separator } from "../components/List";
import currencies from "../data/currencies";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string
  };
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency
  };
};

export default connect(mapStatetoProps)(CurrencyList);
