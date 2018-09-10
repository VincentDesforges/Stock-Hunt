import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'SideDrawerClose'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'SideDrawerOpen'];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open}/>
      <div className={attachedClasses.join(' ')}>
        <div className="SideDrawerLogo">
          <p>Logo</p>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
