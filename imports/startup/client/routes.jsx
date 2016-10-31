import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppLayout from '../../ui/layouts/AppLayout.jsx';

import { Index } from '../../ui/pages/Index.jsx';
// When you export default you DON'T need {} otherwise, you will.
import TasksPageContainer from '../../ui/containers/TasksPageContainer.jsx';
import { NotFound } from '../../ui/pages/NotFound.jsx';
import SignUpPage from '../../ui/pages/SignUpPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';

import Store from '../../reducers/index.js';


Meteor.startup( () => {

  Store.subscribe(refresh);
  function refresh() {
    console.log("REFRESH");
    browserHistory.replace(location);
  }

  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ AppLayout }>
        <IndexRoute component={ TaskPageContainer } />
        <Route path="login" component={LoginPage}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'render-target' )
  );
});
