import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import socketIOClient from "socket.io-client";

import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CustomTabs from '../../components/CustomTabs';

import tabStyle from '../../assests/components/segments/tabStyle';

import { withStyles } from '@material-ui/core/styles';

class TwitterSegment extends Component {

  state = {
    items: [],
    searchTerm: "JavaScript"
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:5001/');

    socket.on('connect', () => {
      console.log("Socket Connected");
      socket.on("tweets", data => {
        let newList = [data].concat(this.state.items.slice(0, 15));
        this.setState({items: newList});
      });
    });

    socket.on('disconnect', () => {
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });

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
    const { classes } = this.props;
    let { items } = this.state;
    //let items = this.state.items;

    let itemsCards =
    <div>
      {items.map((data, i) =>
        <CustomTabs
          key={i}
          headerColor="primary"
          tabs={
            {
              tabName: "Tweet",
              tabContent: (
                <span className="black-text">{data.text}</span>
              )
            }
          }/>
      )}
      </div>;

    let searchControls =
    <div>
      <input
        id="email"
        type="text"
        className="validate"
        value={this.state.searchTerm}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}/>
      <label htmlFor="email">Search</label>
    </div>;

    let filterControls =
    <div>
      <a className="btn-floating btn-small waves-effect waves-light pink accent-2" style={controlStyle} onClick={this.handleResume}>
        <i className="material-icons">play_arrow</i>
      </a>
      <a className="btn-floating btn-small waves-effect waves-light pink accent-2" onClick={this.handlePause}>
        <i className="material-icons">pause</i>
      </a>
      <p>
        <input type="checkbox" id="test5"/>
        <label htmlFor="test5">Retweets</label>
      </p>
    </div>;

    let controls =
    <div>
      {
        items.length > 0
          ? filterControls
          : null
      }
    </div>;

    let loading =
    <div>
      <p className="flow-text">Listening to Streams</p>
      <div className="progress lime lighten-3">
        <div className="indeterminate pink accent-1"></div>
      </div>
    </div>;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id='nav-tabs'>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                {/*searchControls*/}
                {/*controls*/}
                {itemsCards}
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

const controlStyle = {
  marginRight: "5px"
};


export default withStyles(tabStyle)(TwitterSegment);
