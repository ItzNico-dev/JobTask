import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';

const EditMovieForm = ({ movie, onSubmit }) => {
  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);
  const [year, setYear] = useState(movie.year);
  const [rating, setRating] = useState(movie.rating);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id: movie.id, title, genre, year, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Genre'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Input
        type='number'
        placeholder='Year'
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <Input
        type='number'
        placeholder='Rating'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button type='submit' text='Save Changes' />
    </form>
  );
};

EditMovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditMovieForm;
