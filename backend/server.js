import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/admin', adminRoutes);

// Not found route
app.use((req, res, next) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
