import React from 'react';

import './Input.css';

const input = props => {
  let inputElement = null;
  switch (props.inputtype) {
    case('input'):
      inputElement = <input className="InputElement" {...props} />
      break;
    case('textarea'):
      inputElement = <textarea className="InputElement" {...props} />
      break;
    case('select'):
      inputElement = <select className="InputElement" {...props}>{props.children}</select>
      break;
    default:
      inputElement = <input className="InputElement" {...props} />
  }

  return (
    <div className="CustonInput">
      <label className="InputLabel">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
