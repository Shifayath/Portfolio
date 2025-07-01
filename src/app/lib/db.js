// src/app/lib/db.js
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(uri, { dbName: 'portfolio' });
};

export default connectDB;
