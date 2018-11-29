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

  render() {
    const home = {
      padding: '0rem'
    };

    return (
      <Segment style={home}>
        <Register/>
        <Portfolio/>
        <Humans/>
        <Contact/>
      </Segment>
    );
  }
}

function mapStateToProps(state): Object {
  return{
    bacon: state.bacon
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(HomeContainer);
