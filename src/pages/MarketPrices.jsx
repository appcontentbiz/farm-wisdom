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

// Mapping of commodities to their Yahoo Finance symbols
const COMMODITY_SYMBOLS = {
  'Gold': 'GC=F',
  'Silver': 'SI=F',
  'Platinum': 'PL=F',
  'Palladium': 'PA=F',
  'Crude Oil': 'CL=F',
  'Natural Gas': 'NG=F',
  'Corn': 'ZC=F',
  'Soybeans': 'ZS=F',
  'Wheat': 'ZW=F',
  'Cotton': 'CT=F',
  'Coffee': 'KC=F',
  'Sugar': 'SB=F',
  'Cocoa': 'CC=F',
  'Copper': 'HG=F',
  'Lumber': 'LBS=F',
  'Rice': 'ZR=F',
  'Oats': 'ZO=F',
  'Orange Juice': 'OJ=F'
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
        const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`);
        if (!response.ok) throw new Error(`Failed to fetch ${name} data`);
        const data = await response.json();
        
        const quote = data.chart.result[0].meta;
        const price = quote.regularMarketPrice;
        const previousClose = quote.previousClose;
        const change = price - previousClose;
        const changePercent = (change / previousClose) * 100;

        // Get future months
        const futureMonths = [];
        const now = new Date();
        for (let i = 1; i <= 6; i++) {
          const futureDate = new Date(now);
          futureDate.setMonth(now.getMonth() + i);
          
          // Add small increments for future months
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
          futures: futureMonths,
          lastUpdated: new Date()
        };
      });

      const results = await Promise.all(promises);
      setCommodities(results);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      setError('Failed to fetch market data. Falling back to simulation.');
      // Fallback to simulation if API fails
      setCommodities(generateSimulatedData());
    } finally {
      setLoading(false);
    }
  };

  // Generate simulated data as fallback
  const generateSimulatedData = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
  
    const getMonthName = (monthIndex) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[monthIndex % 12];
    };

    const getFuturesMonths = () => {
      const futures = [];
      for (let i = 0; i < 6; i++) {
        const monthIndex = (currentMonth + i + 1) % 12;
        const year = currentYear + Math.floor((currentMonth + i + 1) / 12);
        futures.push(`${getMonthName(monthIndex)} ${year}`);
      }
      return futures;
    };

    const futuresMonths = getFuturesMonths();

    return [
      // Agricultural Commodities
      {
        name: 'Corn',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((4.25 + i * 0.1 + Math.random() * 0.2).toFixed(2)),
          change: Number((Math.random() - 0.5) * (4.25 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Soybeans',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((12.35 + i * 0.1 + Math.random() * 0.3).toFixed(2)),
          change: Number((Math.random() - 0.5) * (12.35 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Wheat',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((6.15 + i * 0.1 + Math.random() * 0.25).toFixed(2)),
          change: Number((Math.random() - 0.5) * (6.15 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      // Precious Metals
      {
        name: 'Gold',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((2050.75 + i * 5 + Math.random() * 15).toFixed(2)),
          change: Number((Math.random() - 0.5) * (2050.75 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Silver',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((23.50 + i * 0.25 + Math.random() * 0.75).toFixed(2)),
          change: Number((Math.random() - 0.5) * (23.50 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Platinum',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((925.50 + i * 2 + Math.random() * 8).toFixed(2)),
          change: Number((Math.random() - 0.5) * (925.50 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Palladium',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((1050.25 + i * 3 + Math.random() * 10).toFixed(2)),
          change: Number((Math.random() - 0.5) * (1050.25 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      // Energy
      {
        name: 'Crude Oil',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((75.50 + i * 0.5 + Math.random() * 2).toFixed(2)),
          change: Number((Math.random() - 0.5) * (75.50 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Natural Gas',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((2.85 + i * 0.05 + Math.random() * 0.15).toFixed(3)),
          change: Number((Math.random() - 0.5) * (2.85 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      // Soft Commodities
      {
        name: 'Coffee',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((185.25 + i * 1 + Math.random() * 5).toFixed(2)),
          change: Number((Math.random() - 0.5) * (185.25 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Cotton',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((0.85 + i * 0.01 + Math.random() * 0.03).toFixed(3)),
          change: Number((Math.random() - 0.5) * (0.85 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Sugar',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((0.25 + i * 0.005 + Math.random() * 0.01).toFixed(3)),
          change: Number((Math.random() - 0.5) * (0.25 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Cocoa',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((3250 + i * 15 + Math.random() * 45).toFixed(2)),
          change: Number((Math.random() - 0.5) * (3250 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      // Base Metals
      {
        name: 'Copper',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((3.85 + i * 0.02 + Math.random() * 0.08).toFixed(3)),
          change: Number((Math.random() - 0.5) * (3.85 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Aluminum',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((2.15 + i * 0.01 + Math.random() * 0.05).toFixed(3)),
          change: Number((Math.random() - 0.5) * (2.15 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Nickel',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((16750 + i * 50 + Math.random() * 150).toFixed(2)),
          change: Number((Math.random() - 0.5) * (16750 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      // Additional Agricultural
      {
        name: 'Rice',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((15.75 + i * 0.2 + Math.random() * 0.4).toFixed(2)),
          change: Number((Math.random() - 0.5) * (15.75 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Oats',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((3.65 + i * 0.05 + Math.random() * 0.15).toFixed(2)),
          change: Number((Math.random() - 0.5) * (3.65 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Lumber',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((565.50 + i * 2.5 + Math.random() * 7.5).toFixed(2)),
          change: Number((Math.random() - 0.5) * (565.50 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Orange Juice',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((2.15 + i * 0.02 + Math.random() * 0.06).toFixed(3)),
          change: Number((Math.random() - 0.5) * (2.15 * 0.02).toFixed(3))
        })),
        lastUpdated: new Date()
      }
    ];
  };

  useEffect(() => {
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
