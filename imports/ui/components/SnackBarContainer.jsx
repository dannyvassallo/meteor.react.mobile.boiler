import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import Store from '../../reducers/index.js';

var SnackbarContainer = React.createClass({

  handleRequestClose: function() {
    Store.dispatch({
      type: "SET_SNACKBAR_OPEN",
      open: false
    });
  },

  render: function() {
    return (
      <Snackbar
        open={this.props.snackbar.open}
        message={this.props.snackbar.message}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
        bodyStyle={{backgroundColor: this.props.snackbar.color}}
      />
    );
  }

});

export default SnackbarContainer;
