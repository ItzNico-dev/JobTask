import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import HomePage from './components/templates/HomePage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const movies = [
  // Sample movie data
  // { id: '1', title: 'Movie 1', genre: 'Action', year: 2021, rating: 7.5 },
  // { id: '2', title: 'Movie 2', genre: 'Drama', year: 2020, rating: 8.0 },
  // { id: '3', title: 'Movie 3', genre: 'Comedy', year: 2019, rating: 6.5 },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' render={() => <HomePage movies={movies} />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
