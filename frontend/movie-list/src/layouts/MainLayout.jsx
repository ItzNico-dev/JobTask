import React from 'react';
import PropTypes from 'prop-types';
import { mainLayoutStyles } from '../styles/MainLayout.module.css';

const MainLayout = ({ children }) => (
  <div className={mainLayoutStyles}>{children}</div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
