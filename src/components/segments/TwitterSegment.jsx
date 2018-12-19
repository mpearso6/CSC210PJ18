// @flow
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Material Icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

// Material-ui
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Components
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CustomTabs from '../../components/CustomTabs';
import TwitterSettingsTab from '../../components/TwitterSettingsTab';

// Assests
import tabStyle from '../../assests/components/segments/tabStyle';

import { withStyles } from '@material-ui/core/styles';

class TwitterSegment extends Component {

  state = {
    search: false,
    stream: false,
    checkedStream: false,
    checkedSearch: false
  };

  constructor(props: Object) {
    super(props: Object);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {

  }

  handleSwitchStreamChange = name => event => {
    new Promise( (resolve, reject) => {
      this.setState({ [name]: event.target.checked });
      resolve(this.state.checkedStream);
    }).then((bool) => {
      if (!bool) {
        this.props.loadStreamTweets();
      }else{
        this.props.clearStreamTweets();
      }
    });
    //this.setState({ [name]: event.target.checked });
  };

  handleSwitchSearchChange = name => event => {
    new Promise( (resolve, reject) => {
      this.setState({ [name]: event.target.checked });
      resolve(this.state.checkedSearch);
    }).then((bool) => {
      if (!bool) {
        this.props.loadSearchTweets();
      }else{
        this.props.clearSearchTweets();
      }
    });
    //this.setState({ [name]: event.target.checked });
  };
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
      changeSearchTerm,
      changeStreamTerm,
      searchTweets,
      streamTweets } = this.props;

    const
      {
        checkedSearch,
        checkedStream
      } = this.state;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id='nav-tabs'>
            <h3>Twitter Tabs</h3>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedStream}
                      onChange={this.handleSwitchStreamChange("checkedStream")}
                      value="checkedStream"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        icon: classes.switchIcon,
                        iconChecked: classes.switchIconChecked,
                        bar: classes.switchBar
                      }}/>
                  }
                  label={
                    checkedStream ? 'stream on' : 'stream off'
                  }
                  classes={{
                    label: classes.label
                  }}/>
                <CustomTabs
                  plainTabs
                  loadTweetsAction={loadStreamTweets}
                  clearTweetsAction={clearStreamTweets}
                  headerColor="rose"
                  tabs={[
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
                        <div>
                          {
                            streamTweets !== undefined ? streamTweets.map((data) =>
                            <p
                              key={data.uniqueId}
                              className={classes.textCenter}>
                              {data.text}
                            </p>)
                            :
                            <p>test</p>
                          }
                        </div>
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
                        <TwitterSettingsTab
                          changeTerm={changeStreamTerm}
                          type='stream'
                          termLabel='Change stream term'/>
                      )
                    }
                  ]}
                  />

              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.checkedSearch}
                        onChange={this.handleSwitchSearchChange("checkedSearch")}
                        value="checkedSearch"
                        classes={{
                          switchBase: classes.switchBase,
                          checked: classes.switchChecked,
                          icon: classes.switchIcon,
                          iconChecked: classes.switchIconChecked,
                          bar: classes.switchBar
                        }}/>
                    }
                    label={
                      checkedSearch ? 'search on' : 'search off'
                    }
                    classes={{
                      label: classes.label
                    }}/>
                <CustomTabs
                  plainTabs
                  loadTweetsAction={loadSearchTweets}
                  clearTweetsAction={clearSearchTweets}
                  headerColor="rose"
                  tabs={[
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
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
                        </div>
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
                        <TwitterSettingsTab
                          changeTerm={changeSearchTerm}
                          type='search'
                          termLabel='Change stream term'/>
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
