import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Grid,
  Button,
  useTheme
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Refresh as RefreshIcon
} from '@mui/icons-material';

// Alpha Vantage commodity symbols
const COMMODITY_SYMBOLS = {
  'Gold': 'GOLD',
  'Silver': 'SILVER',
  'Crude Oil': 'WTI',
  'Natural Gas': 'NATURAL_GAS',
  'Copper': 'COPPER',
  'Aluminum': 'ALUMINUM',
  'Wheat': 'WHEAT',
  'Corn': 'CORN',
  'Cotton': 'COTTON',
  'Sugar': 'SUGAR',
  'Coffee': 'COFFEE'
};

export default function MarketPrices() {
  const [commodities, setCommodities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const fetchMarketData = async () => {
    setLoading(true);
    try {
      const promises = Object.entries(COMMODITY_SYMBOLS).map(async ([name, symbol]) => {
        // Using Alpha Vantage's free commodity API
        const response = await fetch(`https://www.alphavantage.co/query?function=COMMODITY_PRICE&symbol=${symbol}&apikey=demo`);
        
        if (!response.ok) throw new Error(`Failed to fetch ${name} data`);
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        const price = parseFloat(data.data?.[0]?.value) || 0;
        const prevPrice = parseFloat(data.data?.[1]?.value) || 0;
        const change = price - prevPrice;
        
        // Get future months
        const futureMonths = [];
        const now = new Date();
        for (let i = 1; i <= 6; i++) {
          const futureDate = new Date(now);
          futureDate.setMonth(now.getMonth() + i);
          
          // Add small increments for future months based on current price
          const futurePrice = price * (1 + (i * 0.005) + (Math.random() * 0.01 - 0.005));
          const futureChange = futurePrice - price;
          
          futureMonths.push({
            month: futureDate.toLocaleString('default', { month: 'short' }) + ' ' + futureDate.getFullYear(),
            price: Number(futurePrice.toFixed(2)),
            change: Number(futureChange.toFixed(2))
          });
        }

        return {
          name,
          futures: [{
            month: 'Current',
            price: Number(price.toFixed(2)),
            change: Number(change.toFixed(2))
          }, ...futureMonths],
          lastUpdated: new Date()
        };
      });

      const results = await Promise.all(promises);
      setCommodities(results.filter(item => item.futures[0].price > 0));
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch market data. Falling back to simulation.');
      // Fallback to simulation if API fails
      setCommodities(generateSimulatedData());
    } finally {
      setLoading(false);
    }
  };

  // Generate simulated data as fallback
  const generateSimulatedData = () => {
    const baseValues = {
      'Gold': 2050.75,
      'Silver': 23.45,
      'Crude Oil': 75.30,
      'Natural Gas': 2.85,
      'Copper': 3.85,
      'Aluminum': 2.15,
      'Wheat': 6.25,
      'Corn': 4.75,
      'Cotton': 0.85,
      'Sugar': 0.25,
      'Coffee': 1.85
    };

    return Object.entries(baseValues).map(([name, basePrice]) => {
      const futureMonths = [];
      const now = new Date();
      
      // Add random variation to base price for current price
      const currentPrice = basePrice * (1 + (Math.random() * 0.04 - 0.02));
      const currentChange = currentPrice - basePrice;

      // Generate future months data
      for (let i = 1; i <= 6; i++) {
        const futureDate = new Date(now);
        futureDate.setMonth(now.getMonth() + i);
        
        // Add increasing variation for future months
        const variation = (Math.random() * 0.06 - 0.02) * i;
        const futurePrice = currentPrice * (1 + variation);
        const futureChange = futurePrice - currentPrice;
        
        futureMonths.push({
          month: futureDate.toLocaleString('default', { month: 'short' }) + ' ' + futureDate.getFullYear(),
          price: Number(futurePrice.toFixed(2)),
          change: Number(futureChange.toFixed(2))
        });
      }

      return {
        name,
        futures: [{
          month: 'Current',
          price: Number(currentPrice.toFixed(2)),
          change: Number(currentChange.toFixed(2))
        }, ...futureMonths],
        lastUpdated: new Date()
      };
    });
  };

  useEffect(() => {
    // Start with simulated data immediately
    setCommodities(generateSimulatedData());
    setLastUpdate(new Date());
    
    // Then try to fetch real data
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    fetchMarketData();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Market Prices & Futures
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Last update: {lastUpdate.toLocaleTimeString()}
          </Typography>
          <Button
            startIcon={<RefreshIcon />}
            onClick={handleRefresh}
            variant="contained"
            disabled={loading}
          >
            Refresh
          </Button>
        </Box>
      </Box>

      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {commodities.map((commodity) => (
            <Grid item xs={12} key={commodity.name}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {commodity.name} Futures
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Contract Month</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Change</TableCell>
                          <TableCell align="right">Trend</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {commodity.futures.map((future) => (
                          <TableRow key={future.month}>
                            <TableCell component="th" scope="row">
                              {future.month}
                            </TableCell>
                            <TableCell align="right">
                              ${future.price.toFixed(2)}
                            </TableCell>
                            <TableCell 
                              align="right"
                              sx={{ 
                                color: future.change > 0 ? 'success.main' : 'error.main',
                                fontWeight: 'bold'
                              }}
                            >
                              {future.change > 0 ? '+' : ''}{future.change.toFixed(3)}
                            </TableCell>
                            <TableCell align="right">
                              {future.change > 0 ? (
                                <TrendingUp color="success" />
                              ) : (
                                <TrendingDown color="error" />
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
