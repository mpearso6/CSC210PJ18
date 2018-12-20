// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import twitReducer from '../reducers/Reducer';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleWare = createSagaMiddleware();

export function configureStore() {
  return createStore(
    twitReducer,
    compose(
      applyMiddleware(sagaMiddleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
