import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './NavBar.css';

const navBar = () => (
  <header className="NavBar">
    <DrawerToggle />
    <div>Logo</div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default navBar;
