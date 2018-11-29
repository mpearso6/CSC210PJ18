/* @flow */

// Redux
import { createStore, applyMiddleware } from 'redux';
import twitReducer from '../reducers/Reducer';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleWare = createSagaMiddleware();

export function configureStore() {
  return createStore(
    twitReducer,
    applyMiddleware(sagaMiddleWare)
  );
}
