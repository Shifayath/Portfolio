// src/app/lib/Collections/Portfolio.js
import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

export const PortFolio =
  mongoose.models.PortFolio || mongoose.model('PortFolio', portfolioSchema);
