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
  Tabs,
  Tab
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Timeline,
  ShowChart
} from '@mui/icons-material';
import axios from 'axios';

// Sample market data (replace with real API data in production)
const commodities = [
  { 
    name: 'Corn',
    futures: [
      { month: 'Mar 2024', price: 4.25, change: 0.15 },
      { month: 'May 2024', price: 4.35, change: 0.12 },
      { month: 'Jul 2024', price: 4.45, change: 0.18 }
    ],
    lastUpdated: new Date()
  },
  {
    name: 'Soybeans',
    futures: [
      { month: 'Mar 2024', price: 12.35, change: -0.25 },
      { month: 'May 2024', price: 12.45, change: -0.20 },
      { month: 'Jul 2024', price: 12.55, change: -0.15 }
    ],
    lastUpdated: new Date()
  },
  {
    name: 'Wheat',
    futures: [
      { month: 'Mar 2024', price: 6.15, change: 0.08 },
      { month: 'May 2024', price: 6.25, change: 0.10 },
      { month: 'Jul 2024', price: 6.35, change: 0.05 }
    ],
    lastUpdated: new Date()
  },
  {
    name: 'Cotton',
    futures: [
      { month: 'Mar 2024', price: 0.82, change: -0.02 },
      { month: 'May 2024', price: 0.83, change: -0.01 },
      { month: 'Jul 2024', price: 0.84, change: -0.015 }
    ],
    lastUpdated: new Date()
  }
];

const marketNews = [
  {
    title: 'Corn Prices Rally on Strong Export Data',
    date: '2024-01-17',
    summary: 'Corn futures rose as weekly export sales topped market expectations...'
  },
  {
    title: 'Weather Concerns Impact Soybean Outlook',
    date: '2024-01-17',
    summary: 'Soybean prices declined amid forecasts of favorable weather in South America...'
  },
  {
    title: 'Global Wheat Supply Forecast Updated',
    date: '2024-01-16',
    summary: 'The USDA raised its forecast for global wheat production...'
  }
];

const MarketPrices = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [marketData, setMarketData] = useState(commodities);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  const formatChange = (change) => {
    const isPositive = change > 0;
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: isPositive ? 'success.main' : 'error.main',
        }}
      >
        {isPositive ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
        <Typography
          component="span"
          sx={{ ml: 1 }}
        >
          {change > 0 ? '+' : ''}{change.toFixed(3)}
        </Typography>
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Agricultural Market Prices
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<ShowChart />} label="Futures" />
          <Tab icon={<Timeline />} label="Market News" />
        </Tabs>
      </Paper>

      {selectedTab === 0 && (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Commodity</strong></TableCell>
                  <TableCell align="right"><strong>Contract</strong></TableCell>
                  <TableCell align="right"><strong>Price</strong></TableCell>
                  <TableCell align="right"><strong>Change</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marketData.map((commodity) => (
                  commodity.futures.map((future, index) => (
                    <TableRow key={`${commodity.name}-${future.month}`}>
                      {index === 0 && (
                        <TableCell
                          component="th"
                          scope="row"
                          rowSpan={commodity.futures.length}
                          sx={{ verticalAlign: 'top' }}
                        >
                          <Typography variant="subtitle1">
                            {commodity.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Last updated: {commodity.lastUpdated.toLocaleTimeString()}
                          </Typography>
                        </TableCell>
                      )}
                      <TableCell align="right">{future.month}</TableCell>
                      <TableCell align="right">${formatPrice(future.price)}</TableCell>
                      <TableCell align="right">{formatChange(future.change)}</TableCell>
                    </TableRow>
                  ))
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
              * Prices shown are for demonstration purposes. For real-time market data, please sign up for a Professional account.
            </Typography>
          </Box>
        </>
      )}

      {selectedTab === 1 && (
        <Grid container spacing={3}>
          {marketNews.map((news) => (
            <Grid item xs={12} key={news.title}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {news.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                    {new Date(news.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    {news.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Get Real-Time Market Data
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Upgrade to our Professional plan for access to:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Real-Time Prices
                </Typography>
                <Typography variant="body2">
                  Live updates from major agricultural exchanges
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Market Analysis
                </Typography>
                <Typography variant="body2">
                  Expert insights and price forecasts
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Custom Alerts
                </Typography>
                <Typography variant="body2">
                  Price alerts and market notifications
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          href="/pricing"
        >
          Upgrade Now
        </Button>
      </Box>
    </Container>
  );
};

export default MarketPrices;
