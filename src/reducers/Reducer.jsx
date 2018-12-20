// @flow

import * as Actions from '../actions/Actions';
import Auth from '../utils/Auth';

const auth: Func = new Auth();
const defaultState: Object = {
  test: '',
  toneAnalysis: {},
  users: [],
  streamTweets: [],
  searchTweets: [],
  auth
};

// TODO replace all action creators with constants

/*
* Our application's reducer function that handles all the state changes.
* Must return a copy of the state that has the new mutations - we shouldn't
* mutate the state in place.
* @param {Object} state - our application's state tree
* @ return {Object} the updated copy of our application's state
*/
export default function twitReducer(state: Object = defaultState, action: Object): Object {
  switch(action.type) {

    case Actions.TEST_LOADED:
      return {
        ...state,
        test: action.test
      }
    case Actions.USERS_LOADED:
      return {
        ...state,
        users: action.users
      }

    case Actions.STREAM_TWEETS_LOADED:
      return {
        ...state,
        streamTweets: action.streamTweets
      }

    case Actions.SEARCH_TWEETS_LOADED:
      return {
        ...state,
        searchTweets: action.searchTweets
      }
    case Actions.SEARCH_TWEETS_CLEARED:
      return {
        ...state,
        searchTweets: action.searchTweets
      }
    case Actions.STREAM_TWEETS_CLEARED:
      return {
        ...state,
        streamTweets: action.streamTweets
      }
    case Actions.SEARCH_TERM_SUBMITTED:
      return {
        ...state
      }
    case Actions.STREAM_TERM_SUBMITTED:
      return {
        ...state
      }
    case Actions.ANALYSIS_LOADED:
      return{
        ...state,
        toneAnalysis: action.toneAnalysis
      }
    default:
      return state;
  }
}
