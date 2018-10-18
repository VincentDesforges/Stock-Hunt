import React from 'react';

import './CardNav.css';

const cardNav = () => (
  <div className='CardNav'>
    {/* With bold headers
    <div className="CardNavDiv active"><strong>Stock Summary</strong></div>
    <div className="CardNavDiv"><strong>Strategy Description</strong></div>
    <div className="CardNavDiv"><strong>Pros/Cons</strong></div>
    */}
    <div className="CardNavDiv active">Stock Summary</div>
    <div className="CardNavDiv">Strategy Description</div>
    <div className="CardNavDiv">Pros/Cons</div>
  </div>
);

export default cardNav;
