import React from 'react';
import PropTypes from 'prop-types';
import { buttonStyles } from '../styles';

const Button = ({ text, onClick }) => (
  <button css={buttonStyles} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
