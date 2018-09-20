import React from 'react';

import FieldOutput from '../UI/FieldOutput/FieldOutput';
import CardTabs from '../UI/CardTabs/CardTabs';
import './DetailedCard.css'

const detailedCard = (props) => {
  const listFields = Object.keys(props.stockData).map(fieldName => (
    <FieldOutput key={fieldName} field={fieldName} fieldData={props.stockData[fieldName]} />
  ));

  return (
    <div className="DetailedCard">
      <CardTabs />
      <div className="DetailedCardChartAndDataWrapper">
        <div className="DetailedCardChart">
          Chart data to be sourced and Chart plotting to be implemented
        </div>
        <div className="DetailedCardData">
          {listFields}
        </div>
      </div>
    </div>
  );
};

export default detailedCard;
