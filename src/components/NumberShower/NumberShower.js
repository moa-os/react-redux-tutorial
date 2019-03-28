import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';


const NumberShower = (props) => {
  const { name, number } = props;
  return (
    <div className="container">
      <p>{ name }</p>
      <p>{ number }</p>
    </div>
  );
};

NumberShower.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  name: state.name,
  number: state.number,
});

export default connect(mapStateToProps)(NumberShower);
