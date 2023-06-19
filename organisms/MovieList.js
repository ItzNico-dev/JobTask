import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieItem from '../molecules/MovieItem';

const StyledMovieList = styled.div`
  /* Movie list styles here */
`;

const MovieList = ({ movies }) => (
  <StyledMovieList>
    {movies.map((movie) => (
      <MovieItem
        key={movie.id}
        title={movie.title}
        genre={movie.genre}
        year={movie.year}
        rating={movie.rating}
      />
    ))}
  </StyledMovieList>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
