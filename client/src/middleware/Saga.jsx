/* @flow */

// Redux Saga
import { put } from "redux-saga/effects";

import { takeEvery } from "redux-saga/effects";

// constants
import {
  LOAD_TEST,
  TEST_LOADED
} from '../actions/Actions';

// uuid
const uuidv4 = require("uuid/v4");

export function* loadTest(loadTestAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const taco = 'taco';
    yield put({ type: TEST_LOADED, test: {taco: taco} });
  } catch (error) {
    console.log(error);
  }
}

export function* watchForLoadTest(): Generator<any, any, any> {
  yield takeEvery(LOAD_TEST, loadTest);
}

/*
 * Generator function used to listen for all LOAD_DEFINITIONS dispatches and route them to loadDefinitionsSaga
 *
 */

/*
 * Generator function that initializes all of our 'watch' sagas
 *
 */
export default function* rootSaga(): Generator<any, any, any> {
  yield [
    watchForLoadTest()
  ];
}
