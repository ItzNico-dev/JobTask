import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LoginPage({ onLogin, isLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'user@gmail.com' && password === 'password') {
      onLogin(); // Call the onLogin prop to update the isLoggedIn state in the parent component
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (isLoggedIn) {
    return <Navigate to='/main' />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
      {loginError && <p>Invalid email or password. Please try again.</p>}
    </div>
  );
}

export default LoginPage;
