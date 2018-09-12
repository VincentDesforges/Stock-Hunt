import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Home</NavigationItem>
    <NavigationItem to="/strategy/testing">Testing</NavigationItem>
    <NavigationItem to="/strategy/new">New Strategy</NavigationItem>
    <NavigationItem to="/my-strategies">My Strategies</NavigationItem>
    <NavigationItem to="/authenticate">Sign-Up/In</NavigationItem>
  </ul>
);

export default navigationItems;
