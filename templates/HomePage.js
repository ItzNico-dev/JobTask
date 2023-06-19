import React from 'react';
import styled from 'styled-components';
import MovieList from '../organisms/MovieList';

const StyledHomePage = styled.div`
  /* Home page styles here */
`;

const HomePage = ({ movies }) => (
  <StyledHomePage>
    <h2>My Movie List</h2>
    <MovieList movies={movies} />
  </StyledHomePage>
);

export default HomePage;
