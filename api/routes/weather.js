import express from 'express';
import axios from 'axios';
import auth from '../middleware/auth.js';

const router = express.Router();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// Get current weather
router.get('/current', auth, async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get forecast
router.get('/forecast', auth, async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
