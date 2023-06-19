import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'MovieWeb',
    })
    .then(() => {
      console.log('Connected to the Database.');
    })
    .catch((err) => console.error(err));
};

export default connectDB;


