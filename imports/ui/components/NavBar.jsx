import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Store from '../../reducers/index.js';
import DrawerLeft from './DrawerLeft.jsx';

var NavBar = React.createClass({

  _goToIndex: function(){
    browserHistory.push('/');
  },

  _toggleAppDrawer: function(){
    Store.dispatch({
      type: "OPEN_DRAWER",
      open: true
    });
    console.log(Store.getState());
    console.log("Drawer opening!");
  },

  render: function() {
    return (
      <div className="navbar">
        <AppBar
          title="MeteorTodo"
          iconClassNameRight="logo"
          onTitleTouchTap={this._goToIndex}
          onLeftIconButtonTouchTap={this._toggleAppDrawer}
        />
        <DrawerLeft {...this.props}/>
      </div>
    );
  }

});

export default NavBar;
