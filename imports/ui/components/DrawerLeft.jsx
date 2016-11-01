import React from 'react';
import { Link, browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Store from '../../reducers/index.js';

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
    Meteor.logout();
    browserHistory.push('/login');
    Store.dispatch({
      type: "CLOSE_DRAWER",
      open: false
    });
  }

  render() {

    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.drawer.drawerOpen}
          onRequestChange={(open) => this._handleClose() }
          disableSwipeToOpen={true}
        >
          <Link to="/" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Home</MenuItem></Link>
          <Link to="/login" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Login</MenuItem></Link>
          <Link to="/signup" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Sign Up</MenuItem></Link>
          <Link to="#" className="menu-link"><MenuItem onTouchTap={this._handleLogout}>Log Out</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}

module.exports = DrawerLeft;
