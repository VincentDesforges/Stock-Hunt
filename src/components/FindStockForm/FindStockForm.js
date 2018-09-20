import React from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const findStockForm = props => {
  // the form is currently pushing the card down too far <--- to fix
  return (
    <div className="form-and-text">
      <h2 style={{
        paddingTop: '20px',
        color: 'white'
      }}>Share your latest stock pick!</h2>
      <form onSubmit={props.formSubmitRegistered}>
        <Input name='exchange'
          onChange={props.changeRegistered}
          inputtype='select'>
            <option value="NYSE">NYSE</option>
            <option value="LSE">LSE</option>
            <option value="NASDAQ">NASDAQ</option>
        </Input>

        <Input
          inputtype="text"
          type="text"
          name="ticker"
          placeholder="Stock Ticker"
          value={props.tickerValue}
          onChange={props.changeRegistered}/>

        <Button>Find Stock</Button>
      </form>
    </div>
  );
};

export default findStockForm;
