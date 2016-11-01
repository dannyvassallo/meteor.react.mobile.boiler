import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("login-name").value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(name, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
        console.log(err.reason);
      } else {
        browserHistory.push('/');
      }
    });
  }

  render(){
    const error = this.state.error;
    { error.length > 0 ?
        alert(error)
      :''}

    const buttonStyle = {
      marginTop: "20px"
    }

    return (
      <div className="container">
        <div className="row-fluid">
          <div className="col-xs-12">
            <h1>Login</h1>
          </div>
          <form name="loginForm" id="login-form" className="col-xs-12">
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
    );
  }
}
