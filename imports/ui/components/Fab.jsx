import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Store from '../../reducers/index.js';

let fabStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px'
};

var FloatingActionButtonMenu = React.createClass({

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    window.onscroll = function() {
      fabStyle = {
        display: 'none'
      };
    };
  },

  expandMenu: function(){
    alert('yay!');
  },

  render: function() {
    return (
      <FloatingActionButton
        onTouchTap={this.expandMenu}
        style={fabStyle}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }

});

export default FloatingActionButtonMenu;
