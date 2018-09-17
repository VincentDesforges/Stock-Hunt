import React from 'react';

import './CardTabs.css'

const cardTabs = (props) => (
  <div className="CardTabs">
    <div className="CardTabDiv active">Stock Summary</div>
    <div className="CardTabDiv">Strategy Description</div>
    <div className="CardTabDiv">Pros/Cons</div>
  </div>
);

export default cardTabs;
