import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Store from '../../reducers/index.js';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};


var self;
/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class TaskForm extends React.Component {

  componentDidMount(){
    self = this;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = $('#newTaskInput').val().trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    $('#newTaskInput').val('');

    self.handleClose();
    setTimeout(function(){
      $('body').animate({ scrollTop: 0 }, 'fast');
    }, 500);
  }

  handleClose() {
    Store.dispatch({
      type: "MODAL_OPEN",
      open: false
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create a New Task"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.open}
        >
          <TextField
            hintText="Please enter a task title"
            floatingLabelText="Task Title"
            id="newTaskInput"
            fullWidth={true}
          />
        </Dialog>
      </div>
    );
  }
}
