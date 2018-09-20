import React from 'react';

import './Button.css';

const button = props => (

  <button
      className={['CustomButton', props.btnType].join(' ')}
      onClick={props.clicked}>{props.children}</button>
);

export default button;
