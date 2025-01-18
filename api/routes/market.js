const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../middleware/auth');

const MARKET_API_KEY = process.env.MARKET_API_KEY || 'your-market-api-key';
const MARKET_BASE_URL = 'https://api.commodities-api.com/api/v1';

// Get current prices
router.get('/prices', auth, async (req, res) => {
  try {
    const { commodities } = req.query;
    const response = await axios.get(`${MARKET_BASE_URL}/latest`, {
      params: {
        access_key: MARKET_API_KEY,
        symbols: commodities
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Market API error');
  }
});

// Get historical prices
router.get('/historical', auth, async (req, res) => {
  try {
    const { commodities, startDate, endDate } = req.query;
    const response = await axios.get(`${MARKET_BASE_URL}/timeseries`, {
      params: {
        access_key: MARKET_API_KEY,
        symbols: commodities,
        start_date: startDate,
        end_date: endDate
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Market API error');
  }
});

// Get market trends
router.get('/trends', auth, async (req, res) => {
  try {
    const { commodities } = req.query;
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];

    const response = await axios.get(`${MARKET_BASE_URL}/timeseries`, {
      params: {
        access_key: MARKET_API_KEY,
        symbols: commodities,
        start_date: startDate,
        end_date: endDate
      }
    });

    // Calculate trends
    const trends = calculateTrends(response.data);
    res.json(trends);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Market API error');
  }
});

// Helper function to calculate trends
function calculateTrends(data) {
  // Implement trend calculation logic here
  return {
    trends: data.map(item => ({
      commodity: item.symbol,
      trend: item.change > 0 ? 'up' : 'down',
      changePercentage: item.change
    }))
  };
}

module.exports = router;
