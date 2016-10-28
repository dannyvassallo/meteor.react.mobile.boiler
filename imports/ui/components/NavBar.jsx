import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

// export const Navigation = () => (
//   <ul>
//     <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
//     <li><Link to="/tasks" activeClassName="active">Tasks</Link></li>
//   </ul>
// )

var NavBar = React.createClass({

  _goToIndex: function(){
    browserHistory.push('/');
  },

  _toggleAppDrawer: function(){
    // Store.dispatch({
    //   type: "OPEN_DRAWER",
    //   open: true
    // });
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
      </div>
    );
  }

});

export default NavBar;
