/* @flow */

import * as Actions from '../actions/Actions';

const defaultState: Object = {
  bacon: ''
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

    default:
      return state;
  }
}
