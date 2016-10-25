import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import TasksPage from '../imports/ui/TasksPage.jsx';

Meteor.startup(() => {
  render(<TasksPage />, document.getElementById('render-target'));
});
