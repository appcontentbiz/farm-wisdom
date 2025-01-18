import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/farm-wisdom')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Import routes
import authRoutes from './routes/auth.js';
import farmRoutes from './routes/farm.js';
import weatherRoutes from './routes/weather.js';
import analyticsRoutes from './routes/analytics.js';
import marketRoutes from './routes/market.js';
import userRoutes from './routes/users.js';

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/farm', farmRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Serverless Function handler
export const handler = async (event, context) => {
  // For local development
  if (process.env.NODE_ENV === 'development') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

  // For Netlify Functions
  return new Promise((resolve, reject) => {
    const callback = (err, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    };

    app(event, context, callback);
  });
};
