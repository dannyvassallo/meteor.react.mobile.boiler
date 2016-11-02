import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import setSnackBar from '../helpers/snackbar.js';

export default class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let password = document.getElementById("signup-password").value;
    this.setState({error: "test"});
    Accounts.createUser({username: name, password: password}, (err) => {
      if(err){
        setSnackBar(true, err.reason, '#F44336');
      } else {
        setSnackBar(true, 'You\'ve signed up successfully.', '#4CAF50');
        browserHistory.push('/');
      }
    });
  }

  render(){

    const buttonStyle = {
      marginTop: "20px"
    }

    return (
      <div className="row-fluid">
        <div className="col-xs-12 col-lg-6 col-lg-offset-3">
          <h1>Sign Up</h1>
        </div>
        <form name="loginForm" id="login-form" className="col-xs-12 col-lg-6 col-lg-offset-3">
          <TextField
            hintText="Please enter your username"
            floatingLabelText="Username"
            id="signup-name"
            fullWidth={true}
          />
          <br />
          <TextField
            hintText="Please enter your password"
            floatingLabelText="Password"
            type="password"
            id="signup-password"
            fullWidth={true}
          />
          <br />
          <RaisedButton
            id="signup-button"
            label="signup"
            fullWidth={true}
            primary={true}
            style={buttonStyle}
            onTouchTap={this.handleSubmit}
          />
          <br />
          <p className="text-center"> Already have an account? Login <Link to="/login">here</Link></p>
          <br />
        </form>
      </div>
    );
  }
}
