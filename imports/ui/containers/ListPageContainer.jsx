import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../../api/tasks.js';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import LockIcon from 'material-ui/svg-icons/action/lock';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


export default class ListPage extends Component {

  render(){

    const iconButtonElement = (
      <IconButton
        touch={true}
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const menuIconStyle = {
      marginRight: '5px',
      verticalAlign: 'middle',
      height: '20px',
      width: '20px'
    };


    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem><LockIcon style={menuIconStyle} color={darkBlack} />Mark as Private</MenuItem>
        <MenuItem><DeleteIcon style={menuIconStyle} color={darkBlack} />Delete</MenuItem>
        <MenuItem><CloseIcon style={menuIconStyle} color={darkBlack} />Close</MenuItem>
      </IconMenu>
    );

    const paperStyle = {
      marginTop: '40px',
      width: '100%',
      display: 'inline-block',
    };

    return(
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-md-offset-3 col-lg-12 col-lg-offset-0">
                <Paper style={paperStyle} zDepth={1}>
                  <List>
                    <Subheader>Today</Subheader>
                    <ListItem
                      leftCheckbox={<Checkbox />}
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
                      leftCheckbox={<Checkbox />}
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
                      leftCheckbox={<Checkbox />}
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
                      leftCheckbox={<Checkbox />}
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
                      leftCheckbox={<Checkbox />}
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
            </div>
          </div>
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
