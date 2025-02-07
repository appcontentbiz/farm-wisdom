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
  Tab,
  Chip
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Timeline,
  ShowChart,
  Refresh as RefreshIcon
} from '@mui/icons-material';

// Initial market data
const initialCommodities = [
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

const initialMarketNews = [
  {
    title: 'Corn Prices Rally on Strong Export Data',
    date: '2024-02-07',
    summary: 'Corn futures rose as weekly export sales topped market expectations...'
  },
  {
    title: 'Weather Concerns Impact Soybean Outlook',
    date: '2024-02-07',
    summary: 'Soybean prices declined amid forecasts of favorable weather in South America...'
  },
  {
    title: 'Global Wheat Supply Forecast Updated',
    date: '2024-02-06',
    summary: 'The USDA raised its forecast for global wheat production...'
  }
];

const MarketPrices = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [marketData, setMarketData] = useState(initialCommodities);
  const [news, setNews] = useState(initialMarketNews);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time price updates
  const updatePrices = () => {
    setLoading(true);
    
    const updatedData = marketData.map(commodity => ({
      ...commodity,
      futures: commodity.futures.map(future => {
        // Simulate price movement with random changes
        const priceChange = (Math.random() - 0.5) * 0.1;
        const newPrice = Number((future.price + priceChange).toFixed(3));
        
        return {
          ...future,
          price: newPrice,
          change: Number((newPrice - future.price).toFixed(3))
        };
      }),
      lastUpdated: new Date()
    }));

    setMarketData(updatedData);
    setLastUpdate(new Date());
    setLoading(false);
  };

  // Update prices every 30 seconds
  useEffect(() => {
    const interval = setInterval(updatePrices, 30000);
    return () => clearInterval(interval);
  }, [marketData]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleManualRefresh = () => {
    updatePrices();
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Agricultural Market Prices
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip 
            label={`Last update: ${lastUpdate.toLocaleTimeString()}`}
            color="primary"
            variant="outlined"
          />
          <Button
            startIcon={<RefreshIcon />}
            onClick={handleManualRefresh}
            variant="contained"
            disabled={loading}
          >
            Refresh
          </Button>
        </Box>
      </Box>

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

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <CircularProgress size={24} />
        </Box>
      )}

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
                    <TableRow
                      key={`${commodity.name}-${future.month}`}
                      sx={index === 0 ? { '& > td': { borderTop: '2px solid rgba(224, 224, 224, 1)' } } : {}}
                    >
                      {index === 0 && (
                        <TableCell rowSpan={commodity.futures.length}>
                          {commodity.name}
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
        </>
      )}

      {selectedTab === 1 && (
        <Grid container spacing={3}>
          {news.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {item.date}
                  </Typography>
                  <Typography variant="body1">
                    {item.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default MarketPrices;
