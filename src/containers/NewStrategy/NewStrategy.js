import React, { Component } from 'react';

import DetailedCard from '../../components/DetailedCard/DetailedCard';
import './NewStrategy.css';

class NewStrategy extends Component {
  state = {
    exchange: 'NYSE',
    ticker: '',
    detailedData: {
      ticker: 'AAPL',
      exchange: 'NASDAQ',
      price: '223.85',
      change: '5.53',
      percentage_change: '2.54',
      volume: '448,385',
      pe_ratio: '20.28',
      eps: '11.04',
      dividend_yield: '1.31%'
    }
  }

  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted");
  }

  render() {
    return (
      <div className="NewStrategy">
        <div className="form-and-text">
          <h2 style={{paddingTop: '20px'}}>Share your latest stock pick!</h2>
          <form onSubmit={this.onSubmitHandler}>

            <select name='exchange' onChange={this.onChangeHandler}>
              <option value="NYSE">NYSE</option>
              <option value="LSE">LSE</option>
              <option value="NASDAQ">NASDAQ</option>
            </select>

            <input
              type="text"
              name="ticker"
              placeholder="Stock Ticker"
              value={this.state.ticker}
              onChange={this.onChangeHandler}/>
            <button>Find Stock</button>
          </form>
        </div>
        <DetailedCard stockData={this.state.detailedData}/>
      </div>
    );
  };
}

export default NewStrategy;
