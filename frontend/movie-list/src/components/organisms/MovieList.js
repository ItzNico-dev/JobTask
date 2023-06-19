import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../molecules/MovieCard';

const MovieList = ({ movies }) => (
  <div className='movie-list'>
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        genre={movie.genre}
        year={movie.year}
        rating={movie.rating}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
