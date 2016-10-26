import React from 'react';
import { Navigation } from '../components/Navigation.jsx';

export const AppLayout = ( { children } ) => (
  <div>
    <Navigation />
    { children }
  </div>
)
