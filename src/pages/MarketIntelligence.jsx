import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Notifications as AlertIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

// Mock data for demonstration
const generatePriceData = (basePrice, volatility, days) => {
  let price = basePrice;
  return Array.from({ length: days }, (_, i) => {
    price += (Math.random() - 0.5) * volatility;
    return {
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      price: Math.max(0, price.toFixed(2)),
    };
  });
};

const mockCommodities = [
  {
    id: 1,
    name: 'Corn',
    currentPrice: 5.75,
    change: 0.15,
    changePercent: 2.68,
    priceHistory: generatePriceData(5.75, 0.2, 30),
    forecast: 'Upward trend expected due to increasing global demand',
  },
  {
    id: 2,
    name: 'Soybeans',
    currentPrice: 13.45,
    change: -0.28,
    changePercent: -2.04,
    priceHistory: generatePriceData(13.45, 0.4, 30),
    forecast: 'Price stabilization likely in coming weeks',
  },
  {
    id: 3,
    name: 'Wheat',
    currentPrice: 7.82,
    change: 0.32,
    changePercent: 4.27,
    priceHistory: generatePriceData(7.82, 0.3, 30),
    forecast: 'Potential price increase due to weather concerns',
  },
];

const mockAlerts = [
  {
    id: 1,
    type: 'Price Alert',
    message: 'Corn prices have increased by 5% in the last 24 hours',
    severity: 'warning',
  },
  {
    id: 2,
    type: 'Market Insight',
    message: 'Expected increase in soybean demand from Asian markets',
    severity: 'info',
  },
];

export default function MarketIntelligence() {
  const [commodities, setCommodities] = useState(mockCommodities);
  const [alerts, setAlerts] = useState(mockAlerts);
  const [selectedCommodity, setSelectedCommodity] = useState(mockCommodities[0]);
  const [openPriceAlert, setOpenPriceAlert] = useState(false);
  const [priceAlert, setPriceAlert] = useState({
    commodity: '',
    threshold: '',
    type: 'above',
  });
  const [watchlist, setWatchlist] = useState([]);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCommodities(prevCommodities =>
        prevCommodities.map(commodity => {
          const priceChange = (Math.random() - 0.5) * 0.1;
          const newPrice = parseFloat((commodity.currentPrice + priceChange).toFixed(2));
          const newPriceHistory = [...commodity.priceHistory.slice(1), {
            date: new Date().toLocaleDateString(),
            price: newPrice,
          }];
          
          return {
            ...commodity,
            currentPrice: newPrice,
            change: parseFloat((priceChange).toFixed(2)),
            changePercent: parseFloat(((priceChange / commodity.currentPrice) * 100).toFixed(2)),
            priceHistory: newPriceHistory,
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToWatchlist = (commodity) => {
    if (!watchlist.find(item => item.id === commodity.id)) {
      setWatchlist([...watchlist, commodity]);
    }
  };

  const handleRemoveFromWatchlist = (commodityId) => {
    setWatchlist(watchlist.filter(item => item.id !== commodityId));
  };

  const handleCreatePriceAlert = () => {
    const newAlert = {
      id: alerts.length + 1,
      type: 'Custom Price Alert',
      message: `Alert when ${priceAlert.commodity} price goes ${priceAlert.type} ${priceAlert.threshold}`,
      severity: 'info',
    };
    setAlerts([...alerts, newAlert]);
    setOpenPriceAlert(false);
    setPriceAlert({ commodity: '', threshold: '', type: 'above' });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Market Intelligence Dashboard
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenPriceAlert(true)}
            >
              Set Price Alert
            </Button>
          </Box>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12}>
          {alerts.map((alert, index) => (
            <Alert
              key={index}
              severity={alert.severity}
              sx={{ mb: 2 }}
              action={
                <IconButton size="small">
                  <AlertIcon />
                </IconButton>
              }
            >
              <strong>{alert.type}:</strong> {alert.message}
            </Alert>
          ))}
        </Grid>

        {/* Price Overview */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Current Prices
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Commodity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Change</TableCell>
                    <TableCell align="right">% Change</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {commodities.map((commodity) => (
                    <TableRow
                      key={commodity.id}
                      hover
                      onClick={() => setSelectedCommodity(commodity)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell>{commodity.name}</TableCell>
                      <TableCell align="right">${commodity.currentPrice}</TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color: commodity.change >= 0 ? 'success.main' : 'error.main',
                        }}
                      >
                        {commodity.change >= 0 ? '+' : ''}{commodity.change}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color: commodity.changePercent >= 0 ? 'success.main' : 'error.main',
                        }}
                      >
                        {commodity.changePercent >= 0 ? '+' : ''}{commodity.changePercent}%
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Add to Watchlist">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToWatchlist(commodity);
                            }}
                            color="primary"
                          >
                            <AddIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Price Chart */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Price Trends - {selectedCommodity.name}
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={selectedCommodity.priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                    name="Price ($)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
            <Typography variant="body1" color="text.secondary" mt={2}>
              Forecast: {selectedCommodity.forecast}
            </Typography>
          </Paper>
        </Grid>

        {/* Watchlist */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your Watchlist
            </Typography>
            {watchlist.length === 0 ? (
              <Typography color="text.secondary">
                Add commodities to your watchlist to track them here
              </Typography>
            ) : (
              watchlist.map((item) => (
                <Card key={item.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">{item.name}</Typography>
                      <IconButton
                        onClick={() => handleRemoveFromWatchlist(item.id)}
                        color="error"
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                      <Typography variant="h5">${item.currentPrice}</Typography>
                      <Chip
                        icon={item.changePercent >= 0 ? <TrendingUp /> : <TrendingDown />}
                        label={`${item.changePercent >= 0 ? '+' : ''}${item.changePercent}%`}
                        color={item.changePercent >= 0 ? 'success' : 'error'}
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Price Alert Dialog */}
      <Dialog open={openPriceAlert} onClose={() => setOpenPriceAlert(false)}>
        <DialogTitle>Set Price Alert</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Commodity"
            fullWidth
            value={priceAlert.commodity}
            onChange={(e) => setPriceAlert({ ...priceAlert, commodity: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Price Threshold"
            type="number"
            fullWidth
            value={priceAlert.threshold}
            onChange={(e) => setPriceAlert({ ...priceAlert, threshold: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPriceAlert(false)}>Cancel</Button>
          <Button onClick={handleCreatePriceAlert} variant="contained">
            Create Alert
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
