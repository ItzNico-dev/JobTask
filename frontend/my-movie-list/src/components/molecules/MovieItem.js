import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMovieItem = styled.div`
  /* Movie item styles here */
`;

const MovieItem = ({ title, genre, year, rating }) => (
  <StyledMovieItem>
    <h3>{title}</h3>
    <p>Genre: {genre}</p>
    <p>Year: {year}</p>
    <p>Rating: {rating}</p>
  </StyledMovieItem>
);

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieItem;
