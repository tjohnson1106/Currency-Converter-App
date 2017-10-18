import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from "../actions/currencies";

const initialState = {
  baseCurrency: "USD",
  quoteCurrency: "GBP",
  amount: 100,
  conversions: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ///copying all of state as is
        ...state,
        amount: action.amount || 0
      };
    case SWAP_CURRENCY:
      return {
        ///copying all of state as is
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      };

    default:
      return state;
  }
};

export default reducer;
