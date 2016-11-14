import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import setSnackBar from '../../actions/snackbar';
import Store from '../../reducers/index.js';

var SnackbarContainer = React.createClass({

  handleRequestClose: function() {
    Store.dispatch(setSnackBar(false));
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
