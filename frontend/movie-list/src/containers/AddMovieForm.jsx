import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import styles from '../styles/AddMovieForm.module.css';

const AddMovieForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, genre, year, rating });
    // Reset form
    setTitle('');
    setGenre('');
    setYear('');
    setRating('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        className={styles.input}
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        className={styles.input}
        type='text'
        placeholder='Genre'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Input
        className={styles.input}
        type='number'
        placeholder='Year'
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <Input
        className={styles.input}
        type='number'
        placeholder='Rating'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button className={styles.button} type='submit' text='Add Movie' />
    </form>
  );
};

AddMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddMovieForm;
