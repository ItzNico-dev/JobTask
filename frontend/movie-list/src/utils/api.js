const BASE_URL = 'http://localhost:4000';

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to log in.');
  }
};

export const getMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movies`);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to fetch movies.');
  }
};

export const addMovie = async (movieData) => {
  try {
    const response = await fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData),
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to add a movie.');
  }
};

export const updateMovie = async (movieId, movieData) => {
  try {
    const response = await fetch(`${BASE_URL}/movies/${movieId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData),
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to update the movie.');
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movies/${movieId}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to delete the movie.');
  }
};
