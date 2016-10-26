import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    <li><Link to="/tasks" activeClassName="active">Tasks</Link></li>
  </ul>
)
