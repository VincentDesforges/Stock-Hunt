import React from 'react';

import './FieldOutput.css'

const fieldOutput = (props) => {
  const formatedFieldName = props.field.split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <p className="FieldOutput">
      <strong>{formatedFieldName}:</strong> {props.fieldData}</p>
  );
};

export default fieldOutput;
