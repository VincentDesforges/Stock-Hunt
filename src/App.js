import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <h1>In App.js</h1>
        <Layout>
          <p>child into layout</p>
        </Layout>
      </div>
    );
  }
}

export default App;
