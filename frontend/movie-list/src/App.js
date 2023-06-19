import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import MainPage from '../src/pages/HomePage';
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
        element={isLoggedIn ? <MainPage /> : <Navigate to='/login' />}
      />
      <Route
        path='/login'
        element={<LoginPage onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
      />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
