const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../middleware/auth');

const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'your-weather-api-key';
const WEATHER_BASE_URL = 'https://api.weatherapi.com/v1';

// Get current weather
router.get('/current/:location', auth, async (req, res) => {
  try {
    const { location } = req.params;
    const response = await axios.get(`${WEATHER_BASE_URL}/current.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: location
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Weather API error');
  }
});

// Get forecast
router.get('/forecast/:location', auth, async (req, res) => {
  try {
    const { location } = req.params;
    const { days = 7 } = req.query;
    
    const response = await axios.get(`${WEATHER_BASE_URL}/forecast.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: location,
        days
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Weather API error');
  }
});

// Get weather alerts
router.get('/alerts/:location', auth, async (req, res) => {
  try {
    const { location } = req.params;
    const response = await axios.get(`${WEATHER_BASE_URL}/alerts.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: location
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Weather API error');
  }
});

module.exports = router;
