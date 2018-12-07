import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {

  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appBarWide: {

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class AuthContainer extends Component {

  state = {
    anchorEl: null
  };

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
    const { classes, theme } = this.props;
    const {isAuthenticated, login, logout} = this.props.auth;
    const {anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <span
        className={classes.root}>
        <CssBaseline />
        <AppBar
          position="sticky"
          color="inherit"
          className={isAuthenticated() ? classes.appBar : classes.appBarWide}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap>
              Twit
            </Typography>
            <Button
              color='inherit'
              onClick={this.goTo.bind(this, 'home')}>
              Home
            </Button>
            {
              !isAuthenticated() &&
              (<Button
                onClick={login}>
                Log In
              </Button>)
            }
            {
              isAuthenticated() && (
                <span>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit">
                      <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}>
                    <MenuItem onClick={logout}>Log out</MenuItem>
                  </Menu>
                </span>
              )
            }
          </Toolbar>
        </AppBar>
      </span>
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

export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(styles, { withTheme: true })(AuthContainer));
