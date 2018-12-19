import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

// Semantic-ui-react
import {
  Segment
} from 'semantic-ui-react';

// Material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import MailIcon from '@material-ui/icons/Mail';

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



class HomeContainer extends Component {

  state = {
    mobileOpen: false,
    anchorEl: null
  };

  constructor(props: Object){
    super(props);
    (this: any).handleLogin = this.handleLogin.bind(this);
    (this: ant).handleLogout = this.handleLogout.bind(this);
    (this: any).handleDrawerToggle = this.handleDrawerToggle.bind(this);
    (this: any).handleGetAllUsers = this.handleGetAllUsers.bind(this);
  }

  componentDidMount() {

  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleGetAllUsers = () => {
    this.props.loadUsersAction();
  }

  goTo = (route) => {
    this.props.history.replace(`/${route}`);
  }

  handleLogin = () => {
    this.props.auth.login();
  }

  handleLogout = () => {
    this.props.auth.logout();
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const {isAuthenticated} = this.props.auth;
    const {anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const home = {
      padding: '0rem'
    };

    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
        {isAuthenticated() && (
          <div style={{height: '700px'}}> your in! </div>
        )}
        {!isAuthenticated() && (
          <div style={{height: '700px'}}> your not in!</div>
        )}
      </div>
    );
  }
}

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

function mapStateToProps(state): Object {
  return{
    users: state.users,
    bacon: state.bacon,
    auth: state.auth
  }
}

function mapActionCreatorsToProps(dispatch): Object {
  return bindActionCreators(AppActions, dispatch);
}

export default
connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(authContainerStyle)
(HomeContainer));
