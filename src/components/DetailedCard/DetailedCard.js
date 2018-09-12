import React from 'react';

import FieldOutput from '../UI/FieldOutput/FieldOutput';
import './DetailedCard.css'

const detailedCard = (props) => {
  const listFields = Object.keys(props.stockData).map(fieldName => (
    <FieldOutput key={fieldName} field={fieldName} fieldData={props.stockData[fieldName]} />
  ));

  // const listFields = props.stockData

  return (
  <div className="DetailedCard">
    {listFields}
  </div>
  );
};

export default detailedCard;
