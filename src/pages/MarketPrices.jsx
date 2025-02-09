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
  Chip,
  useTheme
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Timeline,
  ShowChart,
  Refresh as RefreshIcon
} from '@mui/icons-material';

// Generate realistic price variations
const generatePriceChange = (basePrice) => {
  const change = (Math.random() - 0.5) * (basePrice * 0.02); // 2% max change
  return Number(change.toFixed(3));
};

const generateFuturesData = () => {
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
        change: generatePriceChange(4.25)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Soybeans',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((12.35 + i * 0.1 + Math.random() * 0.3).toFixed(2)),
        change: generatePriceChange(12.35)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Wheat',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((6.15 + i * 0.1 + Math.random() * 0.25).toFixed(2)),
        change: generatePriceChange(6.15)
      })),
      lastUpdated: new Date()
    },
    // Precious Metals
    {
      name: 'Gold',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((2050.75 + i * 5 + Math.random() * 15).toFixed(2)),
        change: generatePriceChange(2050.75)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Silver',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((23.50 + i * 0.25 + Math.random() * 0.75).toFixed(2)),
        change: generatePriceChange(23.50)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Platinum',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((925.50 + i * 2 + Math.random() * 8).toFixed(2)),
        change: generatePriceChange(925.50)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Palladium',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((1050.25 + i * 3 + Math.random() * 10).toFixed(2)),
        change: generatePriceChange(1050.25)
      })),
      lastUpdated: new Date()
    },
    // Energy
    {
      name: 'Crude Oil',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((75.50 + i * 0.5 + Math.random() * 2).toFixed(2)),
        change: generatePriceChange(75.50)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Natural Gas',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((2.85 + i * 0.05 + Math.random() * 0.15).toFixed(3)),
        change: generatePriceChange(2.85)
      })),
      lastUpdated: new Date()
    },
    // Soft Commodities
    {
      name: 'Coffee',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((185.25 + i * 1 + Math.random() * 5).toFixed(2)),
        change: generatePriceChange(185.25)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Cotton',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((0.85 + i * 0.01 + Math.random() * 0.03).toFixed(3)),
        change: generatePriceChange(0.85)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Sugar',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((0.25 + i * 0.005 + Math.random() * 0.01).toFixed(3)),
        change: generatePriceChange(0.25)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Cocoa',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((3250 + i * 15 + Math.random() * 45).toFixed(2)),
        change: generatePriceChange(3250)
      })),
      lastUpdated: new Date()
    },
    // Base Metals
    {
      name: 'Copper',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((3.85 + i * 0.02 + Math.random() * 0.08).toFixed(3)),
        change: generatePriceChange(3.85)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Aluminum',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((2.15 + i * 0.01 + Math.random() * 0.05).toFixed(3)),
        change: generatePriceChange(2.15)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Nickel',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((16750 + i * 50 + Math.random() * 150).toFixed(2)),
        change: generatePriceChange(16750)
      })),
      lastUpdated: new Date()
    },
    // Additional Agricultural
    {
      name: 'Rice',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((15.75 + i * 0.2 + Math.random() * 0.4).toFixed(2)),
        change: generatePriceChange(15.75)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Oats',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((3.65 + i * 0.05 + Math.random() * 0.15).toFixed(2)),
        change: generatePriceChange(3.65)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Lumber',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((565.50 + i * 2.5 + Math.random() * 7.5).toFixed(2)),
        change: generatePriceChange(565.50)
      })),
      lastUpdated: new Date()
    },
    {
      name: 'Orange Juice',
      futures: futuresMonths.map((month, i) => ({
        month,
        price: Number((2.15 + i * 0.02 + Math.random() * 0.06).toFixed(3)),
        change: generatePriceChange(2.15)
      })),
      lastUpdated: new Date()
    }
  ];
};

export default function MarketPrices() {
  const [commodities, setCommodities] = useState(generateFuturesData());
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();

  // Update prices every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCommodities(generateFuturesData());
      setLastUpdate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setCommodities(generateFuturesData());
      setLastUpdate(new Date());
      setLoading(false);
    }, 1000);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Market Prices & Futures
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip 
            label={`Last update: ${lastUpdate.toLocaleTimeString()}`}
            color="primary"
            variant="outlined"
          />
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

      <Alert severity="info" sx={{ mb: 3 }}>
        Real-time futures data is simulated. Connect to market data API for live updates.
      </Alert>

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
    </Container>
  );
}
