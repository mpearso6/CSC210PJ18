// @flow
import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import socketIOClient from "socket.io-client";

// Redux
import {connect} from 'react-redux';

// Material Icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CustomTabs from '../../components/CustomTabs';

// Assests
import tabStyle from '../../assests/components/segments/tabStyle';

import { withStyles } from '@material-ui/core/styles';

class TwitterSegment extends Component {

  state = {
    items: [],
    searchTerm: "JavaScript"
  };

  constructor(props: Object) {
    super(props: Object);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleResume();
    }
  }

  handleResume() {
    let term = this.state.searchTerm;
    fetch("/setSearchTerm", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({term})
    })
  }

  handlePause(event) {
    fetch("/pause", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    const {
      classes,
      loadSearchTweets,
      loadStreamTweets,
      clearSearchTweets,
      clearStreamTweets,
      searchTweets,
      streamTweets } = this.props;
    let { items } = this.state;
    let searchCards =
      <div>
        {
          searchTweets.statuses !== undefined ? searchTweets.statuses.map((data) =>
          <p
            key={data.uniqueId}
            className={classes.textCenter}>
            {data.text}
          </p>)
          :
          <p>
            test
          </p>
        }
      </div>;
    let streamCards =
      <div>
        {
          streamTweets !== undefined ? streamTweets.map((data) =>
          <p
            key={data.uniqueId}
            className={classes.textCenter}>
            {data.text}
          </p>)
          :
          <p>
            test
          </p>
        }
    </div>;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id='nav-tabs'>
            <h3>Twitter Tabs</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h3>
                  <small>Stream</small>
                </h3>
                <CustomTabs
                  loadTweetsAction={loadStreamTweets}
                  clearTweetsAction={clearStreamTweets}
                  headerColor="rose"
                  tabs={[
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
                        streamCards
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      )
                    },
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    }
                  ]}
                  />

              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h3>
                  <small>Search</small>
                </h3>
                <CustomTabs
                  loadTweetsAction={loadSearchTweets}
                  clearTweetsAction={clearSearchTweets}
                  headerColor="rose"
                  tabs={[
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
                        searchCards
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      )
                    },
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    }
                  ]}
                  />
              </GridItem>
            </GridContainer>
          </div>
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

export default connect(mapStateToProps)(withStyles(tabStyle)(TwitterSegment));
