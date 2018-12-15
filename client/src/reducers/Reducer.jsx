/* @flow */

import * as Actions from '../actions/Actions';
import Auth from '../utils/Auth';
const auth = new Auth();
//auth.login();

const defaultState: Object = {
  users: [],
  bacon: '',
  tweetStream: [],
  tweets: {},
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
export default function twitReducer(state = defaultState, action): Object {
  switch(action.type) {

    case Actions.TEST_LOADED:
      return {
        ...state,
        bacon: action.test
      }
    case Actions.USERS_LOADED:
      return {
        ...state,
        users: action.users
      }

    case Actions.TWEET_STREAM_LOADED:
      return {
        ...state,
        stream: action.stream
      }

    case Actions.TWEETS_LOADED:
      return {
        ...state,
        tweets: action.tweets
      }
    default:
      return state;
  }
}
