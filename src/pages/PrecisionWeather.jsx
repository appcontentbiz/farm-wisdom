import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  WbSunny as SunIcon,
  Opacity as RainIcon,
  Air as WindIcon,
  Terrain as SoilIcon,
  NotificationsActive as AlertIcon,
  Speed as PressureIcon,
} from '@mui/icons-material';

// Mock data for demonstration
const mockWeatherData = {
  current: {
    temperature: 72,
    humidity: 65,
    windSpeed: 8,
    precipitation: 0,
    pressure: 1015,
    soilMoisture: 45,
    description: 'Partly Cloudy',
  },
  forecast: [
    {
      day: 'Today',
      high: 75,
      low: 65,
      precipitation: 20,
      description: 'Partly Cloudy',
    },
    {
      day: 'Tomorrow',
      high: 78,
      low: 63,
      precipitation: 10,
      description: 'Sunny',
    },
    {
      day: 'Wednesday',
      high: 80,
      low: 68,
      precipitation: 40,
      description: 'Scattered Showers',
    },
  ],
  alerts: [
    {
      type: 'Frost Warning',
      message: 'Potential frost conditions tonight. Protect sensitive crops.',
      severity: 'warning',
      timestamp: '2025-01-28T23:00:00',
    },
    {
      type: 'Optimal Conditions',
      message: 'Ideal conditions for planting warm-season crops in the next 48 hours.',
      severity: 'success',
      timestamp: '2025-01-29T12:00:00',
    },
  ],
  soilConditions: {
    moisture: 45,
    temperature: 65,
    ph: 6.8,
    nutrientLevels: 'Good',
  },
};

export default function PrecisionWeather() {
  const [weatherData, setWeatherData] = useState(mockWeatherData);
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherData(prev => ({
        ...prev,
        current: {
          ...prev.current,
          temperature: prev.current.temperature + (Math.random() - 0.5) * 2,
          humidity: Math.max(0, Math.min(100, prev.current.humidity + (Math.random() - 0.5) * 5)),
          windSpeed: Math.max(0, prev.current.windSpeed + (Math.random() - 0.5) * 2),
          soilMoisture: Math.max(0, Math.min(100, prev.current.soilMoisture + (Math.random() - 0.5) * 3)),
        },
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getWeatherColor = (temp) => {
    if (temp < 32) return '#00BCD4';
    if (temp < 60) return '#4CAF50';
    if (temp < 80) return '#FF9800';
    return '#F44336';
  };

  const getSoilMoistureStatus = (moisture) => {
    if (moisture < 30) return { label: 'Dry', color: 'error' };
    if (moisture < 60) return { label: 'Optimal', color: 'success' };
    return { label: 'Wet', color: 'info' };
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Precision Weather Insights
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={alertsEnabled}
                  onChange={(e) => setAlertsEnabled(e.target.checked)}
                  color="primary"
                />
              }
              label="Weather Alerts"
            />
          </Box>
        </Grid>

        {/* Alerts */}
        {alertsEnabled && (
          <Grid item xs={12}>
            {weatherData.alerts.map((alert, index) => (
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
        )}

        {/* Current Conditions */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Current Conditions
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      <SunIcon
                        sx={{
                          mr: 2,
                          fontSize: 40,
                          color: getWeatherColor(weatherData.current.temperature),
                        }}
                      />
                      <div>
                        <Typography variant="body2" color="text.secondary">
                          Temperature
                        </Typography>
                        <Typography variant="h4">
                          {Math.round(weatherData.current.temperature)}°F
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      <RainIcon sx={{ mr: 2, fontSize: 40, color: '#2196F3' }} />
                      <div>
                        <Typography variant="body2" color="text.secondary">
                          Humidity
                        </Typography>
                        <Typography variant="h4">
                          {Math.round(weatherData.current.humidity)}%
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      <WindIcon sx={{ mr: 2, fontSize: 40, color: '#757575' }} />
                      <div>
                        <Typography variant="body2" color="text.secondary">
                          Wind Speed
                        </Typography>
                        <Typography variant="h4">
                          {Math.round(weatherData.current.windSpeed)} mph
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Soil Conditions */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Soil Conditions
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Moisture Level
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <LinearProgress
                  variant="determinate"
                  value={weatherData.current.soilMoisture}
                  sx={{ flexGrow: 1, mr: 2, height: 10, borderRadius: 5 }}
                />
                <Chip
                  label={getSoilMoistureStatus(weatherData.current.soilMoisture).label}
                  color={getSoilMoistureStatus(weatherData.current.soilMoisture).color}
                  size="small"
                />
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Soil Temperature
                </Typography>
                <Typography variant="h6">
                  {weatherData.soilConditions.temperature}°F
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Soil pH
                </Typography>
                <Typography variant="h6">
                  {weatherData.soilConditions.ph}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Forecast */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              3-Day Forecast
            </Typography>
            <Grid container spacing={3}>
              {weatherData.forecast.map((day, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {day.day}
                      </Typography>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            High
                          </Typography>
                          <Typography variant="h5">
                            {day.high}°F
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            Low
                          </Typography>
                          <Typography variant="h5">
                            {day.low}°F
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            Rain
                          </Typography>
                          <Typography variant="h5">
                            {day.precipitation}%
                          </Typography>
                        </div>
                      </Box>
                      <Typography variant="body2" color="text.secondary" mt={2}>
                        {day.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
