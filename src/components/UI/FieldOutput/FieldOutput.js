import React from 'react';

import './FieldOutput.css'

const fieldOutput = (props) => (
  <p className="FieldOutput">
    <strong>{props.field.toUpperCase()}:</strong> {props.fieldData}</p>
);

export default fieldOutput;
