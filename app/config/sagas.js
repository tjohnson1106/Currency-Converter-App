import { takeEvery, select } from "redux-saga/effects";

//1. Swap currency
//2. Change base currency
//3. Make request when app loads

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION
} from "../actions/currencies";

const getLatestRate = currency =>
  fetch(`http://api.fixer.io/latest?base=${currency}`);

// const fetchLatestConversionRates = function*(action) {
//   getLatestRate("USD")
//     .then((res = res.json()))
//     .then(res => console.log(res))
//     .catch(err => console.log("err", err));
//   yield;
// };
const fetchLatestConversionRates = function*(action) {
  let currency = action.currency;
  if (currency === undefined) {
    currency = yield select(state => state.currencies.baseCurrency);
  }
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
