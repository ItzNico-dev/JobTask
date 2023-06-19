import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Router>
  );
};

export default App;
