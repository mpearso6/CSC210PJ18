import React, { Component } from 'react';

// Material-ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from '@material-ui/core/Button';

import withStyles from "@material-ui/core/styles/withStyles";

import headerLinksStyle from '../assests/components/headerLinksStyle';

class HeaderLinks extends Component {

  render() {
    const {classes, auth, home} = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="Home"
            title="Go Home human"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}>
            <Button
              color='inherit'
              onClick={home}>
              Home
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="OAuth"
            title="Login with google"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}>
            <Button
              color='inherit'
              onClick={auth}>
              Login/ Logout
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
