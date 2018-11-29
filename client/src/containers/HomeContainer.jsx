import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from '../actions/Actions';

// Components
import Register from '../components/Register';
import Portfolio from '../components/Portfolio';
import Humans from '../components/Humans';
import Contact from '../components/Contact';

import {
  Segment
} from 'semantic-ui-react';

class HomeContainer extends Component {
  login() {
      this.props.auth.login();
    }
  render() {
    const {isAuthenticated} = this.props.auth;
    const home = {
      padding: '0rem'
    };

    return (
      <Segment style={home}>
        {isAuthenticated() && (
            <div>
              <h4>
                You are logged in!
              </h4>
              <Register/>
              <Portfolio/>
              <Humans/>
              <Contact/>
            </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </Segment>
    );
  }
}

function mapStateToProps(state): Object {
  return{
    bacon: state.bacon,
    auth: state.auth
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(HomeContainer);
