import React from 'react';
import { render } from 'react-dom';
import NavBar from '../components/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SnackbarContainer from '../components/SnackBarContainer.jsx';
import DrawerLeft from '../components/DrawerLeft.jsx';
import Loader from '../components/Loader.jsx';
import Store from '../../reducers/index.js';

class AppLayout extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = Store.getState();
  }

  componentWillMount(){
    console.log(this.state);
  }

  componentDidMount(){
    Store.subscribe(this._getState.bind(this));
    // setInterval(this._getState.bind(this), 500);
    console.log(this.state);
  }

  _getState (){
    console.log("Getting State")
    this.setState(Store.getState());
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar {...this.state}/>
          <div className="container">
            {this.props.children && React.cloneElement(this.props.children, this.state)}
          </div>
          <DrawerLeft {...this.state}/>
          <SnackbarContainer {...this.state}/>
        </div>
      </MuiThemeProvider>
    );
  }

}

module.exports = AppLayout;
