import React from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../styles';

const Input = ({ type, placeholder, value, onChange }) => (
  <input
    css={inputStyles}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
