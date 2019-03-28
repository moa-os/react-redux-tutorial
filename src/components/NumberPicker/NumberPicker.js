import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as A from '../../state/actions';
import './style.css';

const NumberPicker = (props) => {
  const { number, addNumber, subNumber } = props;

  const handleAdd = () => {
    addNumber(number + 1);
  };

  const handleSub = () => {
    subNumber(number - 1);
  };

  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="button" type="button" onClick={handleSub}>
          -
        </button>
      </div>
      <p className="text">{number}</p>
      <div className="buttonContainer">
        <button className="button" type="button" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

NumberPicker.propTypes = {
  number: PropTypes.number.isRequired,
  addNumber: PropTypes.func.isRequired,
  subNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  number: state.number,
});

const mapDispatchToProps = dispatch => ({
  addNumber: number => dispatch(A.addNumber(number)),
  subNumber: number => dispatch(A.subNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberPicker);
