import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { AppLayout } from '../../ui/layouts/AppLayout.jsx';

import { Index } from '../../ui/pages/Index.jsx';
// When you export default you DON'T need {} otherwise, you will.
import TasksPageContainer from '../../ui/containers/TasksPageContainer.jsx';
import { NotFound } from '../../ui/pages/NotFound.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ AppLayout }>
        <IndexRoute component={ Index } />
        <Route path="/tasks" component={ TasksPageContainer } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'render-target' )
  );
});
