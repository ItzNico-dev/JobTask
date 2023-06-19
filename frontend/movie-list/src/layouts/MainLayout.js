import React from 'react';
import PropTypes from 'prop-types';
import { mainLayoutStyles } from '../styles';

const MainLayout = ({ children }) => (
  <div css={mainLayoutStyles}>{children}</div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
