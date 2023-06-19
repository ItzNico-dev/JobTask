import React from 'react';
import { Header, Footer } from '../components';

const DashboardTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DashboardTemplate;
