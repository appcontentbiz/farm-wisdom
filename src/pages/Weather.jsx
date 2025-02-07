import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Alert,
  Chip,
  Button
} from '@mui/material';
import {
  WbSunny,
  Opacity,
  Air,
  Thermostat,
  Schedule,
  Refresh as RefreshIcon,
  WbCloudy,
  Thunderstorm,
  AcUnit,
  WaterDrop
} from '@mui/icons-material';

// Initial weather data simulation
const generateWeatherData = () => {
  const now = new Date();
  const baseTemp = 65; // Base temperature in Fahrenheit
  
  return {
    current: {
      temp: baseTemp + (Math.random() * 10 - 5),
      humidity: 45 + (Math.random() * 20 - 10),
      wind_speed: 8 + (Math.random() * 6 - 3),
      description: "Partly Cloudy",
      precipitation: Math.random() * 20,
      timestamp: now.getTime() / 1000
    },
    hourly: Array.from({ length: 24 }, (_, i) => ({
      temp: baseTemp + (Math.random() * 15 - 7.5),
      humidity: 45 + (Math.random() * 20 - 10),
      wind_speed: 8 + (Math.random() * 6 - 3),
      description: ["Clear", "Partly Cloudy", "Cloudy", "Light Rain"][Math.floor(Math.random() * 4)],
      precipitation: Math.random() * 30,
      timestamp: now.getTime() / 1000 + (i * 3600)
    })),
    daily: Array.from({ length: 7 }, (_, i) => ({
      temp: {
        min: baseTemp - 10 + (Math.random() * 8 - 4),
        max: baseTemp + 10 + (Math.random() * 8 - 4)
      },
      humidity: 45 + (Math.random() * 20 - 10),
      wind_speed: 8 + (Math.random() * 6 - 3),
      description: ["Sunny", "Partly Cloudy", "Cloudy", "Rain", "Thunderstorm"][Math.floor(Math.random() * 5)],
      precipitation: Math.random() * 40,
      timestamp: now.getTime() / 1000 + (i * 86400)
    }))
  };
};

const getWeatherIcon = (description) => {
  switch (description.toLowerCase()) {
    case 'clear':
    case 'sunny':
      return <WbSunny />;
    case 'partly cloudy':
      return <WbCloudy />;
    case 'cloudy':
      return <WbCloudy sx={{ opacity: 0.7 }} />;
    case 'rain':
      return <WaterDrop />;
    case 'thunderstorm':
      return <Thunderstorm />;
    case 'snow':
      return <AcUnit />;
    default:
      return <WbSunny />;
  }
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(generateWeatherData());
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const updateWeather = () => {
    setLoading(true);
    const newData = generateWeatherData();
    setWeatherData(newData);
    setLastUpdate(new Date());
    setLoading(false);
  };

  // Update weather every minute
  useEffect(() => {
    const interval = setInterval(updateWeather, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Weather Forecast
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip 
            label={`Last update: ${lastUpdate.toLocaleTimeString()}`}
            color="primary"
            variant="outlined"
          />
          <Button
            startIcon={<RefreshIcon />}
            onClick={updateWeather}
            variant="contained"
            disabled={loading}
          >
            Refresh
          </Button>
        </Box>
      </Box>

      <Alert severity="info" sx={{ mb: 3 }}>
        Note: This weather data is simulated. Real-time weather service is coming soon.
      </Alert>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <CircularProgress size={24} />
        </Box>
      )}

      {/* Current Weather */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Current Conditions
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Thermostat color="primary" />
                <Typography>
                  Temperature: {Math.round(weatherData.current.temp)}°F
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Opacity color="primary" />
                <Typography>
                  Humidity: {Math.round(weatherData.current.humidity)}%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Air color="primary" />
                <Typography>
                  Wind: {Math.round(weatherData.current.wind_speed)} mph
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WaterDrop color="primary" />
                <Typography>
                  Precipitation: {Math.round(weatherData.current.precipitation)}%
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Hourly Forecast */}
      <Typography variant="h5" gutterBottom>
        Hourly Forecast
      </Typography>
      <Box sx={{ mb: 4, overflowX: 'auto' }}>
        <Grid container spacing={2} sx={{ flexWrap: 'nowrap', pb: 2 }}>
          {weatherData.hourly.slice(0, 12).map((hour, index) => (
            <Grid item key={index}>
              <Card sx={{ minWidth: 120 }}>
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {formatTime(hour.timestamp)}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    {getWeatherIcon(hour.description)}
                  </Box>
                  <Typography variant="h6" align="center">
                    {Math.round(hour.temp)}°F
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {hour.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Daily Forecast */}
      <Typography variant="h5" gutterBottom>
        7-Day Forecast
      </Typography>
      <Grid container spacing={2}>
        {weatherData.daily.map((day, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  {formatDate(day.timestamp)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  {getWeatherIcon(day.description)}
                </Box>
                <Typography variant="body2" align="center" gutterBottom>
                  {day.description}
                </Typography>
                <Typography variant="body2" align="center">
                  High: {Math.round(day.temp.max)}°F
                </Typography>
                <Typography variant="body2" align="center">
                  Low: {Math.round(day.temp.min)}°F
                </Typography>
                <Typography variant="body2" align="center">
                  Precipitation: {Math.round(day.precipitation)}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Weather;
