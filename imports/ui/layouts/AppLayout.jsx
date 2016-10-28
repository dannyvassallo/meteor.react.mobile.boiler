import React from 'react';
import NavBar from '../components/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const AppLayout = ( { children } ) => (
  <MuiThemeProvider>
    <div>
      <NavBar />
      { children }
    </div>
  </MuiThemeProvider>
)
