import React, {Component} from 'react';
import classNames from "classnames";

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import * as AppActions from '../actions/Actions';

// Material-ui Icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

//  Material-ui
import { withStyles } from '@material-ui/core/styles';

import homeStyles from '../assests/components/views/homeStyles';

// Components
import Header from '../components/Header';
import NavPills from '../components/NavPills';
import Footer from '../components/Footer';
import HeaderLinks from '../components/HeaderLinks';
import Parallax from '../components/Parallax';
import GridContainer from '../components/GridContainer';
import GridItem from '../components/GridItem';

// Segments
import TwitterSegment from '../segments/TwitterSegment';
import InfoSegment from '../segments/InfoSegment';

class AuthContainer extends Component {

  constructor(props) {
    super(props);
    (this: any).handleAnalysis = this.handleAnalysis.bind(this);
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

  handleAnalysis = (tweetsArray: Array) => {
    this.props.loadAnalysisAction(tweetsArray);
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
            color: "info"
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
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h2 className={classes.title}>Twit</h2>
                    <h3><small>CSC 210 Final App</small></h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken
                by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                performs and records all of his own music, giving it a warm,
                intimate feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                {/*
                <AltLoginSegment
                  isAuthenticated={isAuthenticated}/>
                */}
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <InfoSegment
                          isAuthenticated={isAuthenticated}/>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <TwitterSegment
                          color='info'
                          loadSearchTweets={this.handleTwitterSearch}
                          loadStreamTweets={this.handleTwitterStream}
                          clearSearchTweets={this.handleClearSearchTweets}
                          clearStreamTweets={this.handleClearStreamTweets}
                          changeSearchTerm={this.handleChangeSearchTweets}
                          changeStreamTerm={this.handleChangeStreamTweets}/>
                      )
                    },
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>

                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>

                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
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

export default connect(mapStateToProps, mapActionCreatorsToProps)(withStyles(homeStyles)(AuthContainer));
