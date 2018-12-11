import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import socketIOClient from "socket.io-client";

import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CustomTabs from '../../components/CustomTabs';

import tabsStyle from '../../assests/components/segments/tabStyle';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


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
    const socket = socketIOClient('https://csc210pj18.herokuapp.com/api/');
/*
    socket.on('connect', () => {
      console.log("Socket Connected");
      socket.on("tweets", data => {
        let newList = [data].concat(this.state.items);
        this.setState({items: newList});
      });
    });

    socket.on('disconnect', () => {
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
    */
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
    let items = this.state.items;

    let itemsCards =
    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      {items.map((x, i) =>
        <CustomTabs
          key={i}
          headerColor="primary"
          tabs={
            {
              tabName: "Tweet",
              tabContent: (
                <p className={classes.textCenter}>
                  {x}
                </p>
              )
            }
          }/>
      )}
    </CSSTransitionGroup>;

    let searchControls =
    <div>
      <input id="email" type="text" className="validate" value={this.state.searchTerm} onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
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
              <GridItem xs={12} sm={12} md={6}>
                {searchControls}
                {
                  items.length > 0 ? controls : null
                }
                {
                  items.length > 0 ? itemsCards : loading
                }
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


export default withStyles(styles)(TwitterSegment);
