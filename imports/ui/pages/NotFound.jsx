import React, { Component } from 'react'

export default class NotFound extends Component {
  render(){
    return(
      <div className="container">
        <div className="row-fluid">
          <div className="col-xs-12">
            <h1>Error 404</h1>
            <img className="full-w" src="https://http.cat/404" />
          </div>
        </div>
      </div>
    );
  }
}
