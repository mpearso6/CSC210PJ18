/* @flow */

// Fetch
import {fetchUsers, fetchTweets, fetchTweetStream} from './TwitFetch';
import { UsersEndpoint, TwitterEndpint, WatsonEndpoint, StandardEndpoint, TwitterEndpoint } from '../utils/Constants';

// Redux Saga
import { put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";

// constants
import {
  LOAD_TEST,
  TEST_LOADED,
  LOAD_USERS,
  USERS_LOADED,
  LOAD_TWEET_STREAM,
  TWEET_STREAM_LOADED,
  LOAD_TWEETS,
  TWEETS_LOADED
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

export function* loadTweetStream(loadTweetStreamAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const stream = yield fetchTweetStream();
    yield put({ type: TWEET_STREAM_LOADED, stream: stream});
  } catch (error) {
    console.log(error);
  }
}

export function* loadTweets(loadTweetsAction: Object): Generator<Promise<Object>, any, any> {
  console.log('this fired');
  try {
    const endpoint: string = TwitterEndpoint + '/search';
    console.log(endpoint);
    yield put({
      type: TWEETS_LOADED,
      tweets: (fetch(endpoint).then((response) => console.log(response)))
    });
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

export function* watchForLoadTweetStream(): Generator<any, any, any>{
  yield takeEvery(LOAD_TWEET_STREAM, loadTweetStream);
}

export function* watchForLoadTweets(): Generator<any, any, any>{
  yield takeEvery(LOAD_TWEETS, loadTweets);
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
    watchForLoadTweetStream(),
    watchForLoadTweets()
  ];
}
