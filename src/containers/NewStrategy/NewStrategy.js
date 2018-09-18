import React, { Component } from 'react';

import DetailedCard from '../../components/DetailedCard/DetailedCard';
import './NewStrategy.css';

import myData from '../../assets/tempData/AAPL.json';// <-- for testing purposes
import CardNav from '../../components/UI/CardNav/CardNav'; // for testing purposes

class NewStrategy extends Component {
  state = {
    exchange: 'NYSE',
    ticker: '',
    detailedData: {}
  }

  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    try { // simulate the axios call to backend
      this.setState({
        detailedData: {
          ...myData[0],
          ...myData[1]
        }
      });
    } catch(err) {
      console.log(err);
    }
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
        <div className="CardAndNavContainer">
          <CardNav/> {/* for testing purposes*/}
          <DetailedCard stockData={this.state.detailedData}/>
        </div>
      </div>
    );
  };
}

export default NewStrategy;
