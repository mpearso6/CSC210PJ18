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
import Button from '../components/Button';
import GridContainer from '../components/GridContainer';
import GridItem from '../components/GridItem';
import CustomTabs from '../components/CustomTabs';
import TwitterSettingsTab from '../components/TwitterSettingsTab';

// Assests
import tabStyle from '../assests/components/segments/tabStyle';

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
    (this: any).handleStreamAnalysis = this.handleStreamAnalysis.bind(this);
    (this: any).handleSearchAnalysis = this.handleSearchAnalysis.bind(this);
  }

  handleSaveSearchTweets = () => {
    const {searchTweets, handleSaveTweets, handleSaveAnalysis, toneAnalysis} = this.props;
    if (searchTweets.statuses && searchTweets.statuses.length) {
      handleSaveTweets(searchTweets.statuses);
      handleSaveAnalysis(toneAnalysis);
    }else{
      console.log('search tweets is empty');
    }
  }

  handleStreamAnalysis = () => {
    const {streamTweets, handleAnalysis} = this.props;
    if (streamTweets && streamTweets.length) {
      handleAnalysis(streamTweets);
    }else{
      console.log('stream tweets is empty');
    }
  }

  handleSearchAnalysis = () => {
    const {searchTweets, handleAnalysis} = this.props;
    if (searchTweets.statuses && searchTweets.statuses.length) {
      handleAnalysis(searchTweets.statuses);
    }else{
      console.log('search tweets is empty');
    }
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
  };

  render() {
    const {
      classes,
      color,
      toneAnalysis,
      loadSearchTweets,
      loadStreamTweets,
      clearSearchTweets,
      clearStreamTweets,
      changeSearchTerm,
      changeStreamTerm,
      searchTweets,
      streamTweets } = this.props;

    const {
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
                <Button
                  style={{marginRight: '1rem'}}
                  onClick={this.handleStreamAnalysis}
                  color="info"
                  round>
                  analysis
                </Button>
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
                    checkedStream ? 'clear stream' : 'run stream'
                  }
                  classes={{
                    label: classes.label
                  }}/>

                <CustomTabs
                  plainTabs
                  loadTweetsAction={loadStreamTweets}
                  clearTweetsAction={clearStreamTweets}
                  headerColor={color}
                  tabs={[
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <TwitterSettingsTab
                          changeTerm={changeStreamTerm}
                          type='stream'
                          termLabel='Change stream term'/>
                      )
                    },
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
                        <div>
                          {
                            streamTweets !== undefined ? streamTweets.map((data, index) =>
                            <p
                              key={index++}
                              className={classes.defaultFont}>
                              {data.text}
                            </p>)
                            :
                            <p className={classes.defaultFont}>test</p>
                          }
                        </div>
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <div >
                          {
                            toneAnalysis.document_tone === undefined  ?
                            (

                              <p className={classes.defaultFont}>
                                Analysis will go here! Click the analysis button
                                for...well... analysis!
                              </p>

                            )
                            :
                            (
                              toneAnalysis.document_tone.tones.map((item, index) =>
                              <div key={index++}>

                                <div className={classes.defaultFontNotCenter}>score: {item.score}</div>

                                <div className={classes.defaultFontNotCenter}>tone id: {item.tone_id}</div>

                                <div className={classes.defaultFontNotCenter}>tone name: {item.tone_name}</div>

                              </div>
                              )
                            )
                            &&
                            (
                              toneAnalysis.sentences_tone.map((item, index) =>
                              <div style={{marginBottom: '1rem'}} key={index++}>
                                <div className={classes.defaultFontNotCenter}>sentence id: {item.sentence_id}</div>
                                <div className={classes.defaultFontNotCenter}>text: {item.text}</div>
                                <div className={classes.defaultFontNotCenter}>tones: {
                                    item.tones.map((tone, index) =>
                                    <div key={index++}>
                                      <div className={classes.defaultFontNotCenter}>score: {tone.score}</div>
                                      <div className={classes.defaultFontNotCenter}>tone id: {tone.tone_id}</div>
                                      <div className={classes.defaultFontNotCenter}>tone name: {tone.tone_name}</div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              )
                            )
                          }
                        </div>
                      )
                    }
                  ]}
                  />

              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Button
                  style={{marginRight: '1rem'}}
                  onClick={this.handleSearchAnalysis}
                  color="info"
                  round>
                  analysis
                </Button>
                <Button
                  style={{marginRight: '1rem'}}
                  onClick={this.handleSaveSearchTweets}
                  color="info"
                  round>
                  save
                </Button>
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
                      checkedSearch ? 'clear search' : 'run search'
                    }
                    classes={{
                      label: classes.label
                    }}/>
                <CustomTabs
                  plainTabs
                  loadTweetsAction={loadSearchTweets}
                  clearTweetsAction={clearSearchTweets}
                  headerColor={color}
                  tabs={[
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <TwitterSettingsTab
                          changeTerm={changeSearchTerm}
                          type='search'
                          termLabel='Change stream term'/>
                      )
                    },
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
                        <div>
                          {
                            searchTweets.statuses !== undefined ? searchTweets.statuses.map((data, index) =>
                              <p
                                key={index++}
                                className={classes.defaultFont}>
                                {data.text}
                              </p>
                            )
                            :
                            <p className={classes.defaultFont}>
                              Click the toggle to read some tweets!
                            </p>
                          }
                        </div>
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <div >
                          {
                            toneAnalysis.document_tone === undefined  ?
                            (

                              <p className={classes.defaultFont}>
                                Analysis will go here! Click the analysis button
                                for...well... analysis!
                              </p>

                            )
                            :
                            (
                              toneAnalysis.document_tone.tones.map((item, index) =>
                              <div key={index++}>

                                <div className={classes.defaultFontNotCenter}>score: {item.score}</div>

                                <div className={classes.defaultFontNotCenter}>tone id: {item.tone_id}</div>

                                <div className={classes.defaultFontNotCenter}>tone name: {item.tone_name}</div>

                              </div>
                              )
                            )
                            &&
                            (
                              toneAnalysis.sentences_tone.map((item, index) =>
                              <div style={{marginBottom: '1rem'}} key={index++}>
                                <div className={classes.defaultFontNotCenter}>sentence id: {item.sentence_id}</div>
                                <div className={classes.defaultFontNotCenter}>text: {item.text}</div>
                                <div className={classes.defaultFontNotCenter}>tones: {
                                    item.tones.map((tone, index) =>
                                    <div key={index++}>
                                      <div className={classes.defaultFontNotCenter}>score: {tone.score}</div>
                                      <div className={classes.defaultFontNotCenter}>tone id: {tone.tone_id}</div>
                                      <div className={classes.defaultFontNotCenter}>tone name: {tone.tone_name}</div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              )
                            )
                          }
                        </div>
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
    auth: state.auth,
    searchTweets: state.searchTweets,
    streamTweets: state.streamTweets
  }
}

export default connect(mapStateToProps)(withStyles(tabStyle)(TwitterSegment));
