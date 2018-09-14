import React from 'react';

import './CardNav.css';

const cardNav = () => (
  <div className='CardNav'>
    <div className="CardNavDiv active"><strong>Stock Summary</strong></div>
    <div className="CardNavDiv"><strong>Strategy Description</strong></div>
    <div className="CardNavDiv"><strong>Pros/Cons</strong></div>
  </div>
);

export default cardNav;
