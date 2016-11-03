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

  getInitialState: function() {
    return {
      lastScrollTop: 0,
      fabVisible: true
    };
  },

  scrollEvent: function(scrollEvent) {
    $(window).on(scrollEvent, function(event){
      var st = $(window).scrollTop();
      var self = this;
      lastScrollTop = this.state.lastScrollTop
      setTimeout(function(){
        if (st >= lastScrollTop){
          self.setState({
            fabVisible: false,
            lastScrollTop: st
          });
          console.log('down', st, lastScrollTop)
        } else {
          self.setState({
            fabVisible: true,
            lastScrollTop: st
          });
          console.log('up', st, lastScrollTop)
        }
        lastScrollTop = st;
      }, 10);
    }.bind(this));
  },

  expandMenu: function(){
    console.log('touched');
  },

  componentWillMount: function() {
    this.scrollEvent('touchstart');
    this.scrollEvent('scroll');
  },

  componentWillUnmount() {
    $(window).unbind('touchstart');
    $(window).unbind('scroll');
  },

  render: function() {
    return (
      <FloatingActionButton
        onTouchTap={this.expandMenu}
        style={fabStyle}
        className={this.state.fabVisible ? ('grow') : ('shrink')}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }

});

export default FloatingActionButtonMenu;
