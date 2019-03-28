import React from 'react';
import './style.css';

const NumberPicker = (props) => {
 // const { number } = props;
  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="button" type="button">
          -
        </button>
      </div>
      <p className="text">12</p>
      <div className="buttonContainer">
        <button className="button" type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default NumberPicker;
