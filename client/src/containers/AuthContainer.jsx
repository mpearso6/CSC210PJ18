import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from '../actions/Actions';
import {
  Button,
  Menu,
  Icon,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react';

class AuthContainer extends Component {
  goTo(route) {
     this.props.history.replace(`/${route}`)
   }

   login() {
     this.props.auth.login();
   }

   logout() {
     this.props.auth.logout();
   }

   render() {
     const { isAuthenticated } = this.props.auth;

     return (
       <div>
         <Menu fluid>
           <Menu.Header>

             <Button

               onClick={this.goTo.bind(this, 'home')}
             >
               Home
             </Button>
             {
               !isAuthenticated() && (
                   <Button

                     onClick={this.login.bind(this)}
                   >
                     Log In
                   </Button>
                 )
             }
             {
               isAuthenticated() && (
                   <Button
                     bsStyle="primary"
                     className="btn-margin"
                     onClick={this.logout.bind(this)}
                   >
                     Log Out
                   </Button>
                 )
             }
           </Menu.Header>
         </Menu>
       </div>
     );
   }
 }


 function mapStateToProps(state): Object {
   return{
     bacon: state.bacon,
     auth: state.auth
   }
 }

 function mapActionCreatorsToProps(dispatch) {
   return bindActionCreators(AppActions, dispatch);
 }

 export default connect(mapStateToProps, mapActionCreatorsToProps)(AuthContainer);
