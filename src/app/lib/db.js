// src/app/lib/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI is not defined in .env.local');
    throw new Error('Please add your Mongo URI to .env.local');
  }
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(uri, {
    dbName: 'portfolio', useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    tlsAllowInvalidCertificates: true,
  }).then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ Connection error:", err));;
};

export default connectDB;
