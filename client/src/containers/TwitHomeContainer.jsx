import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import * as AppActions from '../actions/Actions';
import {
  Icon,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react';

//  Material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import authContainerStyle from '../assests/containers/authContainerStyle';

// Components
import Header from '../components/Header';
import HeaderLinks from '../components/HeaderLinks';
import Parallax from '../components/Parallax';

// Segments
import AltLoginSegment from '../components/segments/AltLoginSegment';

class AuthContainer extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, ...rest } = this.props;
    const {isAuthenticated, login, logout} = this.props.auth;

    return (
      <div>
        <Header
          brand='Twit'
          rightLinks={
            <HeaderLinks
              auth={
                !isAuthenticated() ?
                  login.bind(this) :
                  logout.bind(this) }
              home={this.goTo.bind(this, 'home')}
            />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}/>
        <Parallax image={require('../assests/images/bg4.jpg')}>
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className={classes.title}>Twit</h1>
            </div>
          </div>
        </Parallax>

        <div
          className={classNames(classes.main, classes.mainRaised)}>
          <AltLoginSegment/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state): Object {
  return {
    bacon: state.bacon,
    auth: state.auth
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(authContainerStyle, { withTheme: true })(AuthContainer));
