import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  TrendingUp as TrendingUpIcon,
  WaterDrop as WaterDropIcon,
  AttachMoney as MoneyIcon,
  LocalFlorist as CropIcon,
  Cloud as WeatherIcon,
  Landscape as SoilIcon,
  ShowChart as MarketIcon,
  Build as EquipmentIcon,
  Eco as SustainabilityIcon,
} from '@mui/icons-material';
import { analyticsService } from '../../../services/enterprise/analytics';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AnalyticsDashboard = ({ farmId }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [selectedTimeRange, setSelectedTimeRange] = useState('month');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, [farmId, selectedTimeRange]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const [
        yieldData,
        resourceData,
        financialData,
        cropData,
        weatherData,
        soilData,
        marketData,
        equipmentData,
        sustainabilityData,
      ] = await Promise.all([
        analyticsService.getYieldAnalytics(farmId, selectedTimeRange),
        analyticsService.getResourceAnalytics(farmId),
        analyticsService.getFinancialAnalytics(farmId, selectedTimeRange),
        analyticsService.getCropAnalytics(farmId),
        analyticsService.getWeatherImpactAnalytics(farmId),
        analyticsService.getSoilHealthAnalytics(farmId),
        analyticsService.getMarketAnalytics(farmId),
        analyticsService.getEquipmentAnalytics(farmId),
        analyticsService.getSustainabilityAnalytics(farmId),
      ]);

      setData({
        yield: yieldData,
        resource: resourceData,
        financial: financialData,
        crop: cropData,
        weather: weatherData,
        soil: soilData,
        market: marketData,
        equipment: equipmentData,
        sustainability: sustainabilityData,
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTimeRangeChange = (range) => {
    setSelectedTimeRange(range);
    handleMenuClose();
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Farm Analytics Dashboard</Typography>
        <div>
          <Button
            variant="outlined"
            endIcon={<MoreVertIcon />}
            onClick={handleMenuClick}
          >
            {selectedTimeRange.charAt(0).toUpperCase() + selectedTimeRange.slice(1)}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleTimeRangeChange('day')}>Day</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('week')}>Week</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('month')}>Month</MenuItem>
            <MenuItem onClick={() => handleTimeRangeChange('year')}>Year</MenuItem>
          </Menu>
        </div>
      </Box>

      <Grid container spacing={3}>
        {/* Yield Analytics */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              avatar={<TrendingUpIcon color="primary" />}
              title="Yield Analytics"
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <LineChart width={300} height={200} data={data.yield?.historicalYield}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="yield" stroke="#8884d8" />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Resource Analytics */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              avatar={<WaterDropIcon color="primary" />}
              title="Resource Utilization"
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Typography variant="h6">Water Usage</Typography>
              <Typography variant="body1">{data.resource?.waterUsage}</Typography>
              <Typography variant="h6" mt={2}>Energy Consumption</Typography>
              <Typography variant="body1">{data.resource?.energyConsumption}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Financial Analytics */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              avatar={<MoneyIcon color="primary" />}
              title="Financial Performance"
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="body1">${data.financial?.revenue}</Typography>
              <Typography variant="h6" mt={2}>ROI</Typography>
              <Typography variant="body1">{data.financial?.roi}%</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Additional metric cards... */}
        {/* Add similar cards for Crop Performance, Weather Impact, Soil Health, 
            Market Intelligence, Equipment Performance, and Sustainability Metrics */}
      </Grid>

      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={() => analyticsService.generateCustomReport(farmId, ['yield', 'financial', 'sustainability'])}>
          Generate Custom Report
        </Button>
      </Box>
    </Box>
  );
};

export default AnalyticsDashboard;
