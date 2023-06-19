import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route component={NotFoundPage} />
      </Routes>
    </Router>
  );
};

export default App;
