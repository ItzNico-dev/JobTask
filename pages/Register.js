import React from 'react';
import styled from 'styled-components';
import AdminForm from '../organisms/AdminForm';

const StyledRegister = styled.div`
  /* Register page styles here */
`;

const handleRegisterSubmit = (data) => {
  // Handle register submission logic here
};

const Register = () => (
  <StyledRegister>
    <h2>Register</h2>
    <AdminForm onSubmit={handleRegisterSubmit} />
  </StyledRegister>
);

export default Register;
