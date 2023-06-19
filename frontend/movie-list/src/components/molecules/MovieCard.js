import React from 'react';
import PropTypes from 'prop-types';
import { cardStyles } from '../styles';

const MovieCard = ({ title, genre, year, rating }) => (
  <div css={cardStyles}>
    <h2>{title}</h2>
    <p>Genre: {genre}</p>
    <p>Year: {year}</p>
    <p>Rating: {rating}</p>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
