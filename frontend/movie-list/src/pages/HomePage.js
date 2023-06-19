import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      <h1 className={styles.title}>Welcome to Movie List</h1>
      <p>Discover and rate your favorite movies!</p>
    </div>
  );
};

export default HomePage;
