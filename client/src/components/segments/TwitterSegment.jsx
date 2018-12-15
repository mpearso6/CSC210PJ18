import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import socketIOClient from "socket.io-client";

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

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {
    this.props.loadTweetsAction();
    /*
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
    const { classes, loadTweetAction } = this.props;
    let { items } = this.state;
    //let items = this.state.items;

    let itemsCards =
      <div>
      {items.map((data) =>
        <p
          key={data.uniqueId}
          className={classes.textCenter}>
          {data.text}
        </p>
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
      <a
        className="btn-floating btn-small waves-effect waves-light pink accent-2"
        style={controlStyle}
        onClick={this.handleResume}>
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
            <h3>Twitter Tabs</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h3>
                  <small>Tabs with Icons on Card</small>
                </h3>
                {/*searchControls*/}
                {/*controls*/}
                <CustomTabs
                  headerColor="rose"
                  tabs={[
                    {
                      tabName: "Tweet",
                      tabIcon: Face,
                      tabContent: (
                        itemsCards
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

const controlStyle = {
  marginRight: "5px"
};


export default (withStyles(tabStyle)(TwitterSegment));
