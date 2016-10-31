import React from 'react';
import $ from 'jquery';
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

  render() {

    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.drawer.drawerOpen}
          onRequestChange={(open) => this._handleClose() }
          disableSwipeToOpen={false}
        >
          <Link to="/" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Home</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}

module.exports = DrawerLeft;
