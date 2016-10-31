import React from 'react';
import { render } from 'react-dom';
import NavBar from '../components/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Store from '../../reducers/index.js';

class AppLayout extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = Store.getState();
  }

  componentWillMount(){
    Store.dispatch({
      type: "LOADING",
      isLoading: true
    });
  }

  componentDidMount(){
    Store.subscribe(this._getState.bind(this));
  }

  _getState (){
    this.setState(Store.getState());
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar {...this.state}/>
          {this.props.children && React.cloneElement(this.props.children, this.state)}
        </div>
      </MuiThemeProvider>
    );
  }

}

module.exports = AppLayout;
