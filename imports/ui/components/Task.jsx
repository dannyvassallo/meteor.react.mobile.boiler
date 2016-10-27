import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import LockIcon from 'material-ui/svg-icons/action/lock';
import PublicIcon from 'material-ui/svg-icons/social/public';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

    const menuIconStyle = {
      marginRight: '5px',
      verticalAlign: 'middle',
      height: '20px',
      width: '20px'
    };

    const iconButtonElement = (
      <IconButton
        touch={true}
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        { this.props.showPrivateButton ? (
          <MenuItem onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? (
                <div>
                  <PublicIcon style={menuIconStyle} color={darkBlack} />
                  Mark as Public
                </div>
              ) : (
                <div>
                  <LockIcon style={menuIconStyle} color={darkBlack} />
                  Mark as Private
                </div>
              )
            }
          </MenuItem>
        ) : ''}
        <MenuItem onClick={this.deleteThisTask.bind(this)}>
          <DeleteIcon style={menuIconStyle} color={darkBlack} />
          Delete
        </MenuItem>
        <MenuItem>
          <CloseIcon style={menuIconStyle} color={darkBlack} />
          Close
        </MenuItem>
      </IconMenu>
    );

    return (
      <div className={taskClassName}>
        <ListItem
          leftCheckbox={
            <Checkbox
              checked={this.props.task.checked}
              onClick={this.toggleChecked.bind(this)}
            />
          }
          rightIconButton={rightIconMenu}
          primaryText={
            <strong className="text">{this.props.task.text}</strong>
          }
          secondaryText={
            <span className="username">{this.props.task.username}</span>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </div>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
};
