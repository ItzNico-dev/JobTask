import Movie from '../models/Movie.js';

export async function addMovie(req, res, next) {
  try {
    const { title, genre, year, rating } = req.body;
    const newMovie = new Movie({ title, genre, year, rating });
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    next(error);
  }
}

export async function getAllMovies(req, res, next) {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
}

export async function getMovieById  (req, res, next)  {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};

export async function updateMovieById (req, res, next)  {
  try {
    const { movieId } = req.params;
    const { title, genre, year, rating } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId,
      { title, genre, year, rating },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};

export async function deleteMovieById  (req, res, next)  {
  try {
    const { movieId } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(deletedMovie);
  } catch (error) {
    next(error);
  }
};

