/* @flow */

// Fetch
import {fetchUsers, fetchUserTweet} from './TwitFetch';

// Redux Saga
import { put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";

// constants
import {
  LOAD_TEST,
  TEST_LOADED,
  LOAD_USERS,
  USERS_LOADED,
  LOAD_TWEET,
  TWEET_LOADED
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

export function* loadUsers(loadUsersAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const users = yield fetchUsers();
    yield put({ type: USERS_LOADED, users: users});
  } catch (error) {
    console.log(error);
  }
}

export function* loadTweet(loadTweetAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const tweet = yield fetchUserTweet();
    yield put({ type: TWEET_LOADED, tweet: tweet});
  } catch (error) {
    console.log(error);
  }
}

export function* watchForLoadTest(): Generator<any, any, any> {
  yield takeEvery(LOAD_TEST, loadTest);
}

export function* watchForLoadUsers(): Generator<any, any, any>{
  yield takeEvery(LOAD_USERS, loadUsers);
}

export function* watchForLoadTweetTest(): Generator<any, any, any>{
  yield takeEvery(LOAD_TWEET, loadTweet);
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
    watchForLoadTest(),
    watchForLoadUsers(),
    watchForLoadTweetTest()
  ];
}
