import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joyride, { STATUS } from 'react-joyride';
import { useSnackbar } from 'notistack';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  TextField,
  Slider,
  Alert,
  LinearProgress,
  Tooltip,
  IconButton,
  Chip,
  Divider,
} from '@mui/material';
import Agriculture from '@mui/icons-material/Agriculture';
import WbSunny from '@mui/icons-material/WbSunny';
import Timeline from '@mui/icons-material/Timeline';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Build from '@mui/icons-material/Build';
import Help from '@mui/icons-material/Help';
import LocalFlorist from '@mui/icons-material/LocalFlorist';
import BugReport from '@mui/icons-material/BugReport';
import Nature from '@mui/icons-material/Nature';
import TrendingUp from '@mui/icons-material/TrendingUp';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveCalendar } from '@nivo/calendar';

const DEMO_DURATION = 30 * 60 * 1000; // 30 minutes

export default function Demo() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [timeLeft, setTimeLeft] = useState(DEMO_DURATION);
  const [runTutorial, setRunTutorial] = useState(true);
  
  // Enhanced state management
  const [cropData, setCropData] = useState({
    cropType: 'tomatoes',
    area: 100,
    expectedYield: 0,
    growthStage: 'seedling',
    healthScore: 85,
    waterNeeds: 'moderate',
  });

  const [weather, setWeather] = useState({
    temperature: 25,
    humidity: 60,
    rainfall: 30,
    forecast: generateForecastData(),
  });

  const [marketPrices, setMarketPrices] = useState({
    current: 2.5,
    predicted: 3.0,
    history: generatePriceHistory(),
    trends: {
      weekly: '+5%',
      monthly: '+12%',
      seasonal: 'Peak',
    },
  });

  const [equipment, setEquipment] = useState({
    tractors: 2,
    irrigationSystems: 1,
    harvesters: 1,
    maintenance: {
      nextService: '2025-02-15',
      status: 'Good',
      efficiency: 92,
    },
  });

  const [pests, setPests] = useState({
    riskLevel: 'low',
    activeThreats: ['aphids'],
    preventiveMeasures: ['companion planting', 'natural predators'],
    treatmentHistory: generateTreatmentHistory(),
  });

  // Tutorial steps
  const steps = [
    {
      target: '.crop-planner',
      content: 'Start by planning your crops. Adjust the area and see how it affects your yield predictions.',
      disableBeacon: true,
    },
    {
      target: '.weather-monitor',
      content: 'Monitor weather conditions and see how they impact your farming decisions.',
    },
    {
      target: '.market-analyzer',
      content: 'Track market prices and trends to optimize your selling strategy.',
    },
    {
      target: '.equipment-manager',
      content: 'Manage your farming equipment and track maintenance schedules.',
    },
    {
      target: '.pest-control',
      content: 'Monitor and manage pest threats to protect your crops.',
    },
  ];

  // Tutorial callback
  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTutorial(false);
    }
  };

  // Demo timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(timer);
          enqueueSnackbar('Demo period ended. Upgrade to continue using all features!', { 
            variant: 'info',
            autoHideDuration: 5000,
          });
          navigate('/pricing');
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, enqueueSnackbar]);

  // Helper functions
  function generateForecastData() {
    // Generate 7-day forecast data
    return Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      temperature: 20 + Math.random() * 10,
      rainfall: Math.random() * 50,
    }));
  }

  function generatePriceHistory() {
    // Generate 30-day price history
    return Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 2 + Math.random() * 2,
    }));
  }

  function generateTreatmentHistory() {
    // Generate pest treatment history
    return Array.from({ length: 5 }, (_, i) => ({
      date: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      treatment: ['Neem oil', 'Beneficial insects', 'Organic spray'][Math.floor(Math.random() * 3)],
      effectiveness: 70 + Math.random() * 30,
    }));
  }

  // Calculate yield based on all factors
  const calculateYield = () => {
    const baseYield = cropData.area * 0.1;
    const weatherFactor = (weather.temperature / 30 + weather.humidity / 100 + weather.rainfall / 50) / 3;
    const equipmentFactor = (equipment.tractors + equipment.irrigationSystems + equipment.harvesters) / 5;
    const pestFactor = pests.riskLevel === 'low' ? 1 : pests.riskLevel === 'medium' ? 0.8 : 0.6;
    
    return (baseYield * weatherFactor * equipmentFactor * pestFactor).toFixed(2);
  };

  // Update yield when inputs change
  useEffect(() => {
    setCropData(prev => ({
      ...prev,
      expectedYield: calculateYield(),
    }));
  }, [cropData.area, weather, equipment, pests]);

  // Format time remaining
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Joyride
        steps={steps}
        run={runTutorial}
        continuous
        showProgress
        showSkipButton
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: '#2e7d32',
          },
        }}
      />

      <Alert severity="info" sx={{ mb: 2 }}>
        Demo time remaining: {formatTimeLeft()}
        <Button 
          size="small" 
          onClick={() => setRunTutorial(true)}
          sx={{ ml: 2 }}
        >
          Restart Tutorial
        </Button>
      </Alert>
      
      <LinearProgress 
        variant="determinate" 
        value={(1 - timeLeft / DEMO_DURATION) * 100} 
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {/* Crop Planning Simulator */}
        <Grid item xs={12} md={6} className="crop-planner">
          <Card>
            <CardHeader
              avatar={<Agriculture />}
              title="Crop Planning Simulator"
              subheader="Plan your crop layout and estimate yield"
              action={
                <Tooltip title="Try different crop types and areas to optimize your yield">
                  <IconButton>
                    <Help />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <TextField
                fullWidth
                label="Crop Type"
                value={cropData.cropType}
                onChange={(e) => setCropData({ ...cropData, cropType: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Typography gutterBottom>Field Area (m²): {cropData.area}</Typography>
              <Slider
                value={cropData.area}
                onChange={(e, newValue) => setCropData({ ...cropData, area: newValue })}
                min={10}
                max={1000}
                sx={{ mb: 2 }}
              />
              <Box sx={{ mb: 2 }}>
                <Chip icon={<LocalFlorist />} label={`Growth Stage: ${cropData.growthStage}`} sx={{ mr: 1 }} />
                <Chip icon={<Nature />} label={`Health: ${cropData.healthScore}%`} color="success" />
              </Box>
              <Typography variant="h6" color="primary">
                Expected Yield: {cropData.expectedYield} tons
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Weather Monitoring */}
        <Grid item xs={12} md={6} className="weather-monitor">
          <Card>
            <CardHeader
              avatar={<WbSunny />}
              title="Weather Monitoring"
              subheader="Real-time weather conditions and forecast"
              action={
                <Tooltip title="Monitor weather conditions affecting your crops">
                  <IconButton>
                    <Help />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Typography gutterBottom>Temperature (°C): {weather.temperature}</Typography>
              <Slider
                value={weather.temperature}
                onChange={(e, newValue) => setWeather({ ...weather, temperature: newValue })}
                min={0}
                max={40}
                sx={{ mb: 2 }}
              />
              <Typography gutterBottom>Humidity (%): {weather.humidity}</Typography>
              <Slider
                value={weather.humidity}
                onChange={(e, newValue) => setWeather({ ...weather, humidity: newValue })}
                min={0}
                max={100}
                sx={{ mb: 2 }}
              />
              <Typography gutterBottom>Rainfall (mm): {weather.rainfall}</Typography>
              <Slider
                value={weather.rainfall}
                onChange={(e, newValue) => setWeather({ ...weather, rainfall: newValue })}
                min={0}
                max={100}
                sx={{ mb: 2 }}
              />
              <Box sx={{ height: 200 }}>
                <ResponsiveLine
                  data={[
                    {
                      id: 'temperature',
                      data: weather.forecast.map(d => ({
                        x: d.date,
                        y: d.temperature,
                      })),
                    },
                  ]}
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                  axisBottom={{
                    tickRotation: -45,
                  }}
                  enablePoints={true}
                  useMesh={true}
                  enableGridX={false}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Market Price Analyzer */}
        <Grid item xs={12} md={6} className="market-analyzer">
          <Card>
            <CardHeader
              avatar={<MonetizationOn />}
              title="Market Price Analyzer"
              subheader="Track and predict market prices"
              action={
                <Tooltip title="Analyze market trends to optimize selling prices">
                  <IconButton>
                    <Help />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    Current: ${marketPrices.current}/kg
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" color="primary">
                    Predicted: ${marketPrices.predicted}/kg
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ mb: 2 }}>
                <Chip icon={<TrendingUp />} label={`Weekly: ${marketPrices.trends.weekly}`} sx={{ mr: 1 }} />
                <Chip icon={<Timeline />} label={`Monthly: ${marketPrices.trends.monthly}`} />
              </Box>
              <Box sx={{ height: 200 }}>
                <ResponsiveLine
                  data={[
                    {
                      id: 'price',
                      data: marketPrices.history.map(d => ({
                        x: d.date,
                        y: d.price,
                      })),
                    },
                  ]}
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                  axisBottom={{
                    tickRotation: -45,
                  }}
                  enablePoints={true}
                  useMesh={true}
                  enableGridX={false}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Equipment Management */}
        <Grid item xs={12} md={6} className="equipment-manager">
          <Card>
            <CardHeader
              avatar={<Build />}
              title="Equipment Management"
              subheader="Manage your farming equipment"
              action={
                <Tooltip title="Track and maintain your farming equipment">
                  <IconButton>
                    <Help />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label={`Next Service: ${equipment.maintenance.nextService}`}
                  color="primary"
                  sx={{ mr: 1 }}
                />
                <Chip 
                  label={`Efficiency: ${equipment.maintenance.efficiency}%`}
                  color={equipment.maintenance.efficiency > 90 ? 'success' : 'warning'}
                />
              </Box>
              <Typography gutterBottom>Tractors: {equipment.tractors}</Typography>
              <Slider
                value={equipment.tractors}
                onChange={(e, newValue) => setEquipment({ ...equipment, tractors: newValue })}
                min={0}
                max={5}
                marks
                step={1}
                sx={{ mb: 2 }}
              />
              <Typography gutterBottom>Irrigation Systems: {equipment.irrigationSystems}</Typography>
              <Slider
                value={equipment.irrigationSystems}
                onChange={(e, newValue) => setEquipment({ ...equipment, irrigationSystems: newValue })}
                min={0}
                max={5}
                marks
                step={1}
                sx={{ mb: 2 }}
              />
              <Typography gutterBottom>Harvesters: {equipment.harvesters}</Typography>
              <Slider
                value={equipment.harvesters}
                onChange={(e, newValue) => setEquipment({ ...equipment, harvesters: newValue })}
                min={0}
                max={5}
                marks
                step={1}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Pest Control */}
        <Grid item xs={12} md={6} className="pest-control">
          <Card>
            <CardHeader
              avatar={<BugReport />}
              title="Pest Control"
              subheader="Monitor and manage pest threats"
              action={
                <Tooltip title="Track and manage pest-related issues">
                  <IconButton>
                    <Help />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label={`Risk Level: ${pests.riskLevel}`}
                  color={pests.riskLevel === 'low' ? 'success' : pests.riskLevel === 'medium' ? 'warning' : 'error'}
                  sx={{ mr: 1 }}
                />
                <Chip 
                  label={`Active Threats: ${pests.activeThreats.length}`}
                  color="primary"
                />
              </Box>
              <Typography variant="subtitle1" gutterBottom>Treatment History</Typography>
              <Box sx={{ height: 200 }}>
                <ResponsiveCalendar
                  data={pests.treatmentHistory.map(t => ({
                    day: t.date,
                    value: t.effectiveness,
                  }))}
                  from={pests.treatmentHistory[pests.treatmentHistory.length - 1].date}
                  to={pests.treatmentHistory[0].date}
                  emptyColor="#eeeeee"
                  colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/pricing')}
          sx={{ minWidth: 200 }}
        >
          Upgrade to Full Version
        </Button>
      </Box>
    </Container>
  );
}
