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
import TwitterSegment from '../components/segments/TwitterSegment';

// Segments
import AltLoginSegment from '../components/segments/AltLoginSegment';

class AuthContainer extends Component {

  constructor(props) {
    super(props);
    (this: any).handleTwitterSearch = this.handleTwitterSearch.bind(this);
    (this: any).handleTwitterStream = this.handleTwitterStream.bind(this);

    (this: any).handleClearSearchTweets = this.handleClearSearchTweets.bind(this);
    (this: any).handleClearStreamTweets = this.handleClearStreamTweets.bind(this);

    (this: any).handleChangeSearchTweets = this.handleChangeSearchTweets.bind(this);
    (this: any).handleChangeStreamTweets = this.handleChangeStreamTweets.bind(this);
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

  handleTwitterSearch = () => {
    this.props.loadSearchTweetsAction();
  }

  handleTwitterStream = () => {
    this.props.loadStreamTweetsAction();
  }

  handleClearSearchTweets = () => {
    this.props.clearSearchTweetsAction();
  }

  handleClearStreamTweets = () => {
    this.props.clearStreamTweetsAction();
  }

  handleChangeSearchTweets = (term: String) => {
    this.props.submitSearchTweetAction(term);
  }

  handleChangeStreamTweets = (term: String) => {
    this.props.submitStreamTweetAction(term);
  }

  render() {
    const {classes, tweets, theme, ...rest } = this.props;
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
                  logout.bind(this)}
              home={this.goTo.bind(this, 'home')}
            />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "rose"
          }}
          {...rest}/>
        <Parallax image={require('../assests/images/bg4.jpg')}>
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className={classes.title}>Twit</h1>
            </div>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>

          <AltLoginSegment
            isAuthenticated={isAuthenticated}/>

          <TwitterSegment
            loadSearchTweets={this.handleTwitterSearch}
            loadStreamTweets={this.handleTwitterStream}
            clearSearchTweets={this.handleClearSearchTweets}
            clearStreamTweets={this.handleClearStreamTweets}
            changeSearchTerm={this.handleChangeSearchTweets}
            changeStreamTerm={this.handleChangeStreamTweets}/>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state): Object {
  return {
    bacon: state.bacon,
    auth: state.auth,
    searchTweets: state.searchTweets,
    streamTweets: state.streamTweets
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default
  connect(mapStateToProps, mapActionCreatorsToProps)
  (withStyles(authContainerStyle, { withTheme: true })(AuthContainer));
