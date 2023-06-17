import React from 'react';
import styled from 'styled-components';
import AdminForm from '../organisms/AdminForm';

const StyledLogin = styled.div`
  /* Login page styles here */
`;

const handleLoginSubmit = (data) => {
  // Handle login submission logic here
};

const Login = () => (
  <StyledLogin>
    <h2>Login</h2>
    <AdminForm onSubmit={handleLoginSubmit} />
  </StyledLogin>
);

export default Login;
