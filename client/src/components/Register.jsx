import React, { Component } from 'react';

// Semantic UI react
import {

  Menu,
  Icon,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

class Register extends Component {

  state = {}

  constructor(props: Object) {
    super(props);
    (this : any).handleMenuChange = this.handleMenuChange.bind(this);
  }

  componentDidMount() {
    //console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
  }

  handleMenuChange = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === 'portfolio') {
      //console.log(this.props);
      this.props.auth.login();
    }
  }

  render() {
    const { activeItem } = this.state;
    const {fetchUsers} = this.props;
    const register = {
      height: '700px',
      margin: '0'
    };

    return (
      <Segment style={register}>
        <Button
          onClick={fetchUsers}>
          click
        </Button>
      </Segment>
    );
  }

}

export default Register;