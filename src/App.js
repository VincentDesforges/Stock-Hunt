import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Strategy from './components/Strategy/Strategy';
import Strategies from './containers/Strategies/Strategies';
import NewStrategy from './containers/NewStrategy/NewStrategy';
import PageNotFound from './components/PageNotFound/PageNotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/strategy/new" component={NewStrategy} />
            <Route path="/strategy/:id" component={Strategy} />
            <Route path="/" exact component={Strategies} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
