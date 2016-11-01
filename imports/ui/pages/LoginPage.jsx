import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import setSnackBar from '../helpers/snackbar.js';

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("login-name").value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(name, password, (err) => {
      if(err){
        setSnackBar(true, err.reason, '#F44336');
      } else {
        setSnackBar(true, 'You\'ve been signed in successfully.', '#4CAF50');
      }
    });
  }

  render(){

    const buttonStyle = {
      marginTop: "20px"
    }

    return (
      <div>
        <div className="container">
          <div className="row-fluid">
            <div className="col-xs-12 col-lg-6 col-lg-offset-3">
              <h1>Login</h1>
            </div>
            <form name="loginForm" id="login-form" className="col-xs-12 col-lg-6 col-lg-offset-3">
              <TextField
                hintText="Please enter your username"
                floatingLabelText="Username"
                id="login-name"
                fullWidth={true}
              />
              <br />
              <TextField
                hintText="Please enter your password"
                floatingLabelText="Password"
                type="password"
                id="login-password"
                fullWidth={true}
              />
              <br />
              <RaisedButton
                id="login-button"
                label="login"
                fullWidth={true}
                primary={true}
                style={buttonStyle}
                onTouchTap={this.handleSubmit}
              />
              <br />
              <p className="text-center"> Don't have an account? Register <Link to="/signup">here</Link></p>
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
