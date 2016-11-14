import React from 'react';
import { Link, browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Store from '../../reducers/index.js';
import setSnackBar from '../../actions/snackbar.js';

class DrawerLeft extends React.Component {

  _handleClose(){
    Store.dispatch({
      type: "CLOSE_DRAWER",
      open: false
    });
    console.log("Drawer closing!");
  }

  _handleLogout(e){
    e.preventDefault();
    Meteor.logout(function(err){
      if(!err){
        browserHistory.push('/users/login');
        Store.dispatch(setSnackBar(true, 'You\'ve been signed out successfully.', '#4CAF50'));
      }
    });
    Store.dispatch({
      type: "CLOSE_DRAWER",
      open: false
    });
  }

  _handleOpen(){
    self = this;
    if(location.pathname == '/'){
      setTimeout(function(){
        self.props.snackbar.open = false;
      }, 100);
    }
    return this.props.drawer.drawerOpen
  }

  render() {

    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this._handleOpen()}
          onRequestChange={(open) => this._handleClose() }
          disableSwipeToOpen={true}
        >
          <Link to="/" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Home</MenuItem></Link>
          { Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              [ <Link key="admin" to="/admin" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Admin</MenuItem></Link> ]
            ) : (
              ''
            )
          }
          { Meteor.user() != null ? (
              [ <Link key="logout" to="#" className="menu-link"><MenuItem onTouchTap={this._handleLogout}>Log Out</MenuItem></Link> ]
            ) : (
              [
                <Link key="login" to="/users/login" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Login</MenuItem></Link>,
                <Link key="signup" to="/users/signup" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Sign Up</MenuItem></Link>
              ]
            )
          }
        </Drawer>
      </div>
    );
  }
}

module.exports = DrawerLeft;
