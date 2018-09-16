import React from 'react';

import DetailedCard from '../DetailedCard/DetailedCard';
import './Strategy.css'

const tempProps = {
  ticker: 'AAPL',
  exchange: 'NASDAQ',
  price: '223.85',
  change: '5.53',
  percentage_change: '2.54',
  volume: '448,385',
  pe_ratio: '20.28',
  eps: '11.04',
  dividend_yield: '1.31%'
};

const strategy = (props) => (
  <div className="Strategy">
    <DetailedCard stockData={tempProps}/>
  </div>
);

export default strategy;
