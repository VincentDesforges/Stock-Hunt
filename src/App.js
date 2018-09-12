import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Strategy from './components/Strategy/Strategy';
import Strategies from './containers/Strategies/Strategies';
import NewStrategy from './containers/NewStrategy/NewStrategy';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>child into layout</p>
          <Strategy />
          <Strategies />
          <NewStrategy />
        </Layout>
      </div>
    );
  }
}

export default App;
