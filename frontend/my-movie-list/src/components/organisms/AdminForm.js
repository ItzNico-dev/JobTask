import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const StyledAdminForm = styled.div`
  /* Admin form styles here */
`;

const AdminForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <StyledAdminForm>
      <h3>Admin Form</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type='submit' text='Submit' />
      </form>
    </StyledAdminForm>
  );
};

AdminForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AdminForm;
