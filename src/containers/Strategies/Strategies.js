import React, { Component } from 'react';

import './Strategies.css';

class Strategies extends Component {
  state = {
    searchField: '',
    orderBy: '', // most popular, most recent
    filter: '', // strategy type (value, growth, short, etc...)
  }

  render() {
    return (
      <p className="Strategies">Strategies</p>
    );
  };
}

export default Strategies;
