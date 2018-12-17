import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import 'semantic-ui-css/semantic.css';

// Redux
import {createStore, applyMiddleware} from 'redux';
import {configureStore, sagaMiddleWare} from './store/ConfigureStore';
import {Provider} from 'react-redux';
import Auth from './utils/Auth';

// Sagas
import rootSaga from './middleware/Saga.jsx';

// Mateiral-ui
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './assests/theme';

// Containers
import AppRouter from './containers/RouterContainer';

const store = configureStore();

sagaMiddleWare.run(rootSaga);

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <AppRouter/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
