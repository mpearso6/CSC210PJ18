import React, { Component } from 'react';

// Material-ui

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from '../GridContainer';
import GridItem from '../GridItem';

class AltLoginSegment extends Component {

  render() {
    const {isAuthenticated} = this.props;
    return (
      <div style={{height: '700px'}}>
        {isAuthenticated() && (
         <span>your in!</span>
        )}
        {!isAuthenticated() && (
           <span>your not in!</span>
        )}
      </div>
    );
  }

}

export default AltLoginSegment;
