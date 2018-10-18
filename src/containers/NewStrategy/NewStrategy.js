import React, { Component } from 'react';

import DetailedCard from '../../components/DetailedCard/DetailedCard';
import './NewStrategy.css';

import myData from '../../assets/tempData/GE.json';// <-- for testing purposes
import CardNav from '../../components/UI/CardNav/CardNav'; // for testing purposes
import FindStockForm from '../../components/FindStockForm/FindStockForm'; // for testing purposes

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
          ...myData[1],
          ...myData[2]
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="NewStrategy">
        <FindStockForm
          formSubmitRegistered={this.onSubmitHandler}
          changeRegistered={this.onChangeHandler}
          tickerValue={this.state.ticker}/>

        <div className="CardAndNavContainer">
          <CardNav/> {/* for testing purposes*/}
          <DetailedCard stockData={this.state.detailedData}/>
        </div>
      </div>
    );
  };
}

export default NewStrategy;
