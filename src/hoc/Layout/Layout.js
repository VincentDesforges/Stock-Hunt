import React, { Component } from 'react';

import './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  render() {
    return (
      <React.Fragment>
        <p>Toolbar</p>
        <p>Side Drawer</p>
        <main className="LayoutContent">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
