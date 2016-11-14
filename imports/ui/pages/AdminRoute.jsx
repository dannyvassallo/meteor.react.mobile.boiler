import React, { Component } from 'react';
import Store from '../../reducers/index.js';
import Loader from '../components/Loader';

export default class AdminRoute extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        { this.props.loading.isLoading ?
          <Loader />
          :
        <div className='row-fluid'>
          <div className="col-xs-10 col-xs-offset-1">
            <h3>Admin Route</h3>
            <p>You should only see this as an admin</p>
          </div>
        </div>
        }
      </div>
    );
  }
}
