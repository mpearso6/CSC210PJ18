// Fetch
import {fetchUsers, fetchSearchTweets, fetchStreamTweets, changeStreamTweetTerm, changeSearchTweetTerm} from './TwitFetch';
import {fetchAnalysis} from './WatsonFetch';

// Constants
import { UsersEndpoint, WatsonApiEndpoint, StandardEndpoint, TwitterApiEndpoint } from '../utils/Constants';


// Redux Saga
import { takeEvery, call, put, all } from "redux-saga/effects";

// @flow

// constants
import {
  LOAD_TEST,
  TEST_LOADED,
  LOAD_USERS,
  USERS_LOADED,
  LOAD_ANALYSIS,
  ANALYSIS_LOADED,
  LOAD_STREAM_TWEETS,
  SUBMIT_SEARCH_TERM,
  SUBMIT_STREAM_TERM,
  SEARCH_TERM_SUBMITTED,
  STREAM_TERM_SUBMITTED,
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
    const users = yield call(fetchUsers, UsersEndpoint);
    yield put({ type: USERS_LOADED, users: users});
  } catch (error) {
    console.log(error);
  }
}

export function* loadStreamTweets(loadStreamTweetsAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const data = yield call(fetchStreamTweets, TwitterApiEndpoint + '/stream');
    yield put({ type: STREAM_TWEETS_LOADED, streamTweets: data});
  } catch (error) {
    console.log(error);
  }
}

export function* loadSearchTweets(loadSearchTweetsAction: Object): Generator<Promise<Object>, any, any> {
  console.log('this fired');

  try {
    const data = yield call(fetchSearchTweets, TwitterApiEndpoint + '/search')
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

export function* submitSearchTweetsTerm(submitSearchTweetsTermAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const args = [TwitterApiEndpoint + '/setSearchTerm', submitSearchTweetsTermAction.term];
    console.log(submitSearchTweetsTermAction.term);
    const data = yield call(changeSearchTweetTerm, ...args);
    yield put({ type: SEARCH_TERM_SUBMITTED})
  } catch (error) {
    console.log(error);
  }
}

export function* submitStreamTweetsTerm(submitStreamTweetsTermAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const args = [TwitterApiEndpoint + '/setStreamTerm', submitStreamTweetsTermAction.term];
    const data = yield call(changeStreamTweetTerm, ...args);
    yield put({ type: STREAM_TERM_SUBMITTED})
  } catch (error) {
    console.log(error);
  }
}

export function* loadAnalysis(loadAnalysisAction: Object): Generator<Promise<Object>, any, any> {
  try {
    const data = yield call(fetchAnalysis, WatsonApiEndpoint);
    yield put({ type: STREAM_TERM_SUBMITTED})
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

export function* watchForSubmitSearchTweetsTerm(): Generator<any, any, any>{
  yield takeEvery(SUBMIT_SEARCH_TERM, submitSearchTweetsTerm);
}

export function* watchForSubmitStreamTweetsTerm(): Generator<any, any, any>{
  yield takeEvery(SUBMIT_STREAM_TERM, submitStreamTweetsTerm);
}

export function* watchForSentenceAnalysis(): Generator<any, any, any>{
  yield takeEvery(LOAD_ANALYSIS, loadAnalysis);
}
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
    watchForClearStreamTweets(),
    watchForSubmitSearchTweetsTerm(),
    watchForSubmitStreamTweetsTerm(),
    watchForSentenceAnalysis(),
  ])
}
