import React, { Component } from 'react';

// Semantic UI react
import {
  Button,
  Menu,
  Icon,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react';

class Register extends Component {

  state = {}

  constructor(props: Object) {
    super(props);
    (this : any).handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleMenuChange = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === 'portfolio') {
      console.log(this.props);
      this.props.auth.login();
    }
  }

  render() {
    const { activeItem } = this.state;

    const register = {
      backgroundColor: '#83457F',
      height: '700px'
    };

    return (
      <Segment style={register}>
        <Menu borderless>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleMenuChange}/>


          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleMenuChange}/>


          <Menu.Item
            name='humans'
            active={activeItem === 'humans'}
            onClick={this.handleMenuChange}/>


          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleMenuChange}/>

        </Menu>
      </Segment>
    );
  }

}

export default Register;
