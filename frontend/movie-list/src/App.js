import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../src/pages/HomePage';
import LoginPage from '../src/pages/LoginPage';
import NotFoundPage from '../src/pages/NotFoundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          isLoggedIn ? (
            <Navigate to='/main' replace />
          ) : (
            <Navigate to='/login' replace />
          )
        }
      />
      <Route
        path='/login'
        element={<LoginPage onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
      />
      <Route path='/main' element={<HomePage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
