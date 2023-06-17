import app from './routes/index.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

// Connect to database
connectDB();

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
