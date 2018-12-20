import React, { Component } from "react";

import { Router, Route} from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// history
import history from "../utils/history";

// Actions
import * as AppActions from "../actions/Actions";

// Containers
import AuthContainer from '../containers/AuthContainer';

// Components
import Callback from '../components/Callback';

export class AppRouter extends Component {
  _element = React.createElement;

  state = {};

  componentDidMount() {

  }

  componentDidUpdate(prevProps: Object) {

  }

  render() {
    const handleAuthentication = (nextState, replace) => {
      if (/access_token|id_token|error/.test(nextState.location.hash)) {
        this.props.auth.handleAuthentication();
      }
    }
      return (
        <Router history={history}>
          <div>

            <Route path="/" render={(props) => <AuthContainer auth={this.props.auth} {...props} />} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
            }}/>

          </div>
        </Router>
      );
    }
  }


/*
* Function that returns all branches of the state tree we want this container to subscribe to
* Called every time the state is updated, these results get merged into the container's props
* i.e this.props.definitions = state.definitions. Passed as an argument to connect()
*
*@param {Object} state - the Redux state set up in Reducer.js
*@return {Object}
*/
function mapStateToProps(state, ownProps): Object {
  return {
    bacon: state.bacon,
    auth: state.auth
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(AppRouter);
