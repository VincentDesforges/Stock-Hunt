import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem>Home</NavigationItem>
    <NavigationItem>New Strategy</NavigationItem>
    <NavigationItem>My Strategies</NavigationItem>
    <NavigationItem>Sign-Up/In</NavigationItem>
  </ul>
);

export default navigationItems;
