import React, { Component } from 'react';

import NavBar from '../../components/Navigation/NavBar/NavBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideDrawer open={this.state.showSideDrawer}/>
        <main className="LayoutContent">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
