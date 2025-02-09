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

export default function MarketPrices() {
  const [commodities, setCommodities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());

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
          change: Number((Math.random() - 0.5) * 0.15)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Soybeans',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((12.35 + i * 0.1 + Math.random() * 0.3).toFixed(2)),
          change: Number((Math.random() - 0.5) * 0.25)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Wheat',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((6.15 + i * 0.1 + Math.random() * 0.25).toFixed(2)),
          change: Number((Math.random() - 0.5) * 0.20)
        })),
        lastUpdated: new Date()
      },
      // Precious Metals
      {
        name: 'Gold',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((2050.75 + i * 5 + Math.random() * 15).toFixed(2)),
          change: Number((Math.random() - 0.5) * 8)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Silver',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((23.50 + i * 0.25 + Math.random() * 0.75).toFixed(2)),
          change: Number((Math.random() - 0.5) * 0.45)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Platinum',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((925.50 + i * 2 + Math.random() * 8).toFixed(2)),
          change: Number((Math.random() - 0.5) * 5)
        })),
        lastUpdated: new Date()
      },
      // Energy
      {
        name: 'Crude Oil',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((75.50 + i * 0.5 + Math.random() * 2).toFixed(2)),
          change: Number((Math.random() - 0.5) * 1.5)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Natural Gas',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((2.85 + i * 0.05 + Math.random() * 0.15).toFixed(3)),
          change: Number((Math.random() - 0.5) * 0.12)
        })),
        lastUpdated: new Date()
      },
      // Soft Commodities
      {
        name: 'Coffee',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((185.25 + i * 1 + Math.random() * 5).toFixed(2)),
          change: Number((Math.random() - 0.5) * 3)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Cotton',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((0.85 + i * 0.01 + Math.random() * 0.03).toFixed(3)),
          change: Number((Math.random() - 0.5) * 0.02)
        })),
        lastUpdated: new Date()
      },
      {
        name: 'Sugar',
        futures: futuresMonths.map((month, i) => ({
          month,
          price: Number((0.25 + i * 0.005 + Math.random() * 0.01).toFixed(3)),
          change: Number((Math.random() - 0.5) * 0.008)
        })),
        lastUpdated: new Date()
      }
    ];
  };

  const updateData = () => {
    setLoading(true);
    try {
      const data = generateSimulatedData();
      setCommodities(data);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      console.error('Error generating data:', err);
      setError('Failed to update market data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    updateData();
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
