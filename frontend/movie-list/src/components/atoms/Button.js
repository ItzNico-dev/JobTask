import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

const Button = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
