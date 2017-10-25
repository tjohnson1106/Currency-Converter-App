import { takeEvery } from "redux-saga/effects";

//1. Swap currency
//2. Change base currency
//3. Make request when app loads

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION
} from "../actions/currencies";

const fetchLatestConversionRates = function*(action) {
  console.log("TODO: Update", action);
  yield;
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
