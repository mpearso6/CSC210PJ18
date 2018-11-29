import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from '../actions/Actions';

class HomeContainer extends Component {

  render() {
    return (
      <div>taco is working</div>
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
