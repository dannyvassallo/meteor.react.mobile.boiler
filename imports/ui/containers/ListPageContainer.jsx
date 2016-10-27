import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../../api/tasks.js';

import {List, ListItem} from 'material-ui/List';
import {Paper} from 'material-ui';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


export default class ListPage extends Component {

  render(){

    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Mark as Private</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );

    const paperStyle = {
      'margin-top': '40px',
      'width': '100%',
      'display': 'inline-block',
    };

    return(
        <div>
          <Paper style={paperStyle} zDepth={1}>
          <List>
            <Subheader>Today</Subheader>
            <ListItem
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText="Brendan Lim"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/kolage-128.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText="me, Scott, Jennifer"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Summer BBQ</span><br />
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText="Grace Ng"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Oui oui</span><br />
                  Do you have any Paris recs? Have you ever been?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/kerem-128.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText="Kerem Suer"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Birthday gift</span><br />
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText="Raquel Parrado"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Recipe to try</span><br />
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
          </Paper>
        </div>
    );
  }
}

ListPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default ListPageContainer = createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, ListPage);
