import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppLayout from '../../ui/layouts/AppLayout.jsx';

import AdminRoute from '../../ui/pages/AdminRoute.jsx';
import TasksPage from '../../ui/pages/TasksPage.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import SignUpPage from '../../ui/pages/SignUpPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';

import Store from '../../reducers/index.js';

Meteor.startup( () => {

  Store.subscribe(refresh);
  function refresh() {
    console.log("REFRESH");
    browserHistory.replace(location);
  }

  function redirectIfSignedIn(){
    if(Meteor.userId() != null){
      console.log("Redirecting Signed In User");
      browserHistory.replace('/');
    } else {
      console.log("User is NOT there");
    }
  }

  function redirectUnlessSignedIn(){
    if(Meteor.userId() === null){
      console.log("Redirecting Visitor");
      browserHistory.replace('/login');
    } else {
      console.log("User is there");
    }
  }

  function redirectUnlessAdmin(){
    if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
      console.log("Redirecting Non-Admin");
      browserHistory.replace('/login');
    } else {
      console.log("Admin is present");
    }
  }

  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ AppLayout }>
        <IndexRoute onEnter={ redirectUnlessSignedIn } component={ TasksPage } />
        <Route path="login" onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } component={LoginPage}/>
        <Route path="signup" onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } component={SignUpPage}/>
        <Route path="admin" onChange={ redirectUnlessAdmin } onEnter={ redirectUnlessAdmin } component={ AdminRoute }/>
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'render-target' )
  );
});
