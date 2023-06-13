import express, { Router } from 'express';
const router = express.Router();
import { authMiddleware } from '../middleware/authMiddleware.js'
import {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} from '../controllers/movieController.js';
// Add a new movie
router.post('/', authMiddleware, addMovie);

// Get all movies
router.get('/', getAllMovies);

// Get a movie by id
router.get('/:movieId', getMovieById);

// Update a movie by id
router.put('/:movieId', authMiddleware, updateMovieById);

// Delete a movie by id
router.delete('/:movieId', authMiddleware, deleteMovieById);

export default router;
