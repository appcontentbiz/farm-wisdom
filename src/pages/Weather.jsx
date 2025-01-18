import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CircularProgress,
  TextField,
  Button,
  Alert
} from '@mui/material';
import {
  WbSunny,
  Opacity,
  Air,
  Thermostat,
  Schedule
} from '@mui/icons-material';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [zipCode, setZipCode] = useState('');

  const fetchWeatherByLocation = async (lat, lon) => {
    try {
      setLoading(true);
      setError(null);
      
      // Get current weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      );
      
      // Get 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      );
      
      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again later.');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLocationByZip = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const { lat, lon } = response.data;
      setLocation({ lat, lon });
      fetchWeatherByLocation(lat, lon);
    } catch (err) {
      setError('Invalid ZIP code. Please try again.');
    }
  };

  useEffect(() => {
    // Get user's location if they allow it
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchWeatherByLocation(latitude, longitude);
        },
        (err) => {
          console.error('Geolocation error:', err);
          // Use a default location (e.g., New York City)
          setLocation({ lat: 40.7128, lon: -74.0060 });
          fetchWeatherByLocation(40.7128, -74.0060);
        }
      );
    }
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
      <Typography variant="h4" component="h1" gutterBottom>
        Weather Forecast
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Enter ZIP Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="e.g., 10001"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={fetchLocationByZip}
              disabled={!zipCode || loading}
            >
              Get Weather
            </Button>
          </Grid>
        </Grid>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : weather ? (
        <>
          {/* Current Weather */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom>
                    Current Weather in {weather.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WbSunny sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h3">
                      {Math.round(weather.main.temp)}°F
                    </Typography>
                  </Box>
                  <Typography variant="h6">
                    {weather.weather[0].description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Thermostat sx={{ mr: 1 }} />
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            Feels Like
                          </Typography>
                          <Typography variant="body1">
                            {Math.round(weather.main.feels_like)}°F
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Opacity sx={{ mr: 1 }} />
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            Humidity
                          </Typography>
                          <Typography variant="body1">
                            {weather.main.humidity}%
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Air sx={{ mr: 1 }} />
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            Wind Speed
                          </Typography>
                          <Typography variant="body1">
                            {Math.round(weather.wind.speed)} mph
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Schedule sx={{ mr: 1 }} />
                        <div>
                          <Typography variant="body2" color="text.secondary">
                            Updated
                          </Typography>
                          <Typography variant="body1">
                            {formatTime(weather.dt)}
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* 5-Day Forecast */}
          {forecast && (
            <>
              <Typography variant="h5" gutterBottom>
                5-Day Forecast
              </Typography>
              <Grid container spacing={2}>
                {forecast.list
                  .filter((item, index) => index % 8 === 0) // Get one reading per day
                  .map((item) => (
                    <Grid item xs={12} sm={6} md={2.4} key={item.dt}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            {formatDate(item.dt)}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 1,
                            }}
                          >
                            <img
                              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                              alt={item.weather[0].description}
                              style={{ width: 50, height: 50 }}
                            />
                          </Box>
                          <Typography variant="h6" align="center">
                            {Math.round(item.main.temp)}°F
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                          >
                            {item.weather[0].description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </>
          )}
        </>
      ) : (
        <Typography variant="body1" color="text.secondary" align="center">
          Enter a ZIP code or allow location access to view weather data
        </Typography>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Weather data provided by OpenWeather API. Updated every 15 minutes.
        </Typography>
      </Box>
    </Container>
  );
};

export default Weather;
