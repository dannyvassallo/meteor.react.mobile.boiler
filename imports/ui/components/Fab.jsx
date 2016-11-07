import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Store from '../../reducers/index.js';

let fabStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px'
};

var lastScrollTop = 0;

var FloatingActionButtonMenu = React.createClass({

  getInitialState: function() {
    return {
      fabVisible: true
    };
  },

  handleScroll: function(event){
    var st = $(window).scrollTop();
    var self = this;
    if (st >= lastScrollTop){
      self.setState({
        fabVisible: false
      });
      console.log('down', st, lastScrollTop);
    } else {
      self.setState({
        fabVisible: true
      });
      console.log('up', st, lastScrollTop);
    }
    lastScrollTop = st;
  },

  scrollEvent: function() {
    $(window).on('scroll', this.handleScroll);
  },

  openForm: function(){
    Store.dispatch({
      type: "MODAL_OPEN",
      open: true
    });
    console.log(this.props.open);
  },

  componentWillMount: function() {
    this.scrollEvent();
  },

  componentWillUnmount() {
    $(window).off('scroll', this.handleScroll);
  },

  render: function() {
    return (
      <FloatingActionButton
        onTouchTap={this.openForm}
        style={fabStyle}
        className={this.state.fabVisible ? ('grow') : ('shrink')}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }

});

export default FloatingActionButtonMenu;
