import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Semantic UI react
import {
  Button,
  Menu,
  Icon,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react';

class Humans extends Component {

  render() {
    const { classes, theme } = this.props;

    const portfolio = {
      backgroundColor: '#4B444E',
      height: '767px'
    };

    return (
      <Segment style={portfolio}>

      </Segment>
    );
  }
}

export default Humans;
