import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Store from '../../reducers/index.js';

let fabStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px'
};

var lastScrollTop = 0,
isScrolling = false;

$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

var FloatingActionButtonMenu = React.createClass({

  getInitialState: function() {
    return {
      fabVisible: true
    };
  },

  fabVisiblility: function(){
    var st = $(window).scrollTop(),
    self = this;
    if (st >= lastScrollTop){
      self.setState({
        fabVisible: false,
      });
      console.log('down', st, lastScrollTop)
    } else {
      self.setState({
        fabVisible: true,
      });
      console.log('up', st, lastScrollTop)
    }
    lastScrollTop = st;
  },

  handleScroll: _.throttle(function(event){
    isScrolling = true;
  }, 100),

  scrollEvent: function() {
    $(window).on('scroll', this.handleScroll);
  },

  expandMenu: function(){
    console.log('touched');
  },

  componentWillMount: function() {
    this.scrollEvent();
    self = this;
    $(window).scrollEnd(function(){
      isScrolling = false;
      self.fabVisiblility();
    }, 100);
  },

  componentWillUnmount() {
    $(window).off('scroll', this.handleScroll);
    $(window).scrollEnd = null
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
