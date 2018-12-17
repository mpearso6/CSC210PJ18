// Fetch
import {fetchUsers, fetchSearchTweets, fetchStreamTweets} from './TwitFetch';
import { UsersEndpoint, WatsonEndpoint, StandardEndpoint, TwitterEndpoint } from '../utils/Constants';

// Redux Saga
import { takeEvery, call, put, all } from "redux-saga/effects";

// @flow

// constants
import {
  LOAD_TEST,
  TEST_LOADED,
  LOAD_USERS,
  USERS_LOADED,
  LOAD_STREAM_TWEETS,
  STREAM_TWEETS_LOADED,
  LOAD_SEARCH_TWEETS,
  SEARCH_TWEETS_LOADED,
  CLEAR_SEARCH_TWEETS,
  SEARCH_TWEETS_CLEARED,
  CLEAR_STREAM_TWEETS,
  STREAM_TWEETS_CLEARED
} from '../actions/Actions';

// uuid
const uuidv4 = require("uuid/v4");

export function* loadTest(loadTestAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const taco: String  = 'taco';
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

export function* loadStreamTweets(loadStreamTweetsAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const data = yield call(fetchStreamTweets, TwitterEndpoint + '/stream');
    yield put({ type: STREAM_TWEETS_LOADED, streamTweets: data});
  } catch (error) {
    console.log(error);
  }
}

export function* loadSearchTweets(loadSearchTweetsAction: Object): Generator<Promise<Object>, any, any> {
  console.log('this fired');

  try {
    const data = yield call(fetchSearchTweets, TwitterEndpoint + '/search')
    yield put({ type: SEARCH_TWEETS_LOADED, searchTweets: data })
  } catch (error) {
    console.log(error);
  }
}

export function* clearSearchTweets(clearSearchTweetsAction: Object): Generator<Promise<Object>, any, any> {
  try {
    yield put({ type: SEARCH_TWEETS_CLEARED, searchTweets: [] })
  } catch (error) {
    console.log(error);
  }
}

export function* clearStreamTweets(clearStreamTweetsAction: Object): Generator<Promise<Object>, any, any> {
  try {
    yield put({ type: STREAM_TWEETS_CLEARED, streamTweets: [] })
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

export function* watchForLoadStreamTweets(): Generator<any, any, any>{
  yield takeEvery(LOAD_STREAM_TWEETS, loadStreamTweets);
}

export function* watchForLoadSearchTweets(): Generator<any, any, any>{
  yield takeEvery(LOAD_SEARCH_TWEETS, loadSearchTweets);
}

export function* watchForClearSearchTweets(): Generator<any, any, any>{
  yield takeEvery(CLEAR_SEARCH_TWEETS, clearSearchTweets);
}

export function* watchForClearStreamTweets(): Generator<any, any, any>{
  yield takeEvery(CLEAR_STREAM_TWEETS, clearStreamTweets);
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
  yield all([
    watchForLoadTest(),
    watchForLoadUsers(),
    watchForLoadStreamTweets(),
    watchForLoadSearchTweets(),
    watchForClearSearchTweets(),
    watchForClearStreamTweets()
  ])
}
