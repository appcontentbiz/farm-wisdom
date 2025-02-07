import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const DashboardCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const FarmDataDashboard = () => {
  const [soilData, setSoilData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [markets, setMarkets] = useState([]);
  const [resources, setResources] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 40.7128, lon: -74.0060 });

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [soilRes, weatherRes, marketsRes, resourcesRes] = await Promise.all([
          fetch('/api/soil-data'),
          fetch(`/api/weather?lat=${userLocation.lat}&lon=${userLocation.lon}`),
          fetch(`/api/farm-markets?lat=${userLocation.lat}&lon=${userLocation.lon}`),
          fetch(`/api/free-resources?lat=${userLocation.lat}&lon=${userLocation.lon}`),
        ]);

        const soil = await soilRes.json();
        const weather = await weatherRes.json();
        const marketsData = await marketsRes.json();
        const resourcesData = await resourcesRes.json();

        setSoilData(soil);
        setWeatherData(weather);
        setMarkets(marketsData);
        setResources(resourcesData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(fetchData, 30000); // Update every 30 seconds
    fetchData(); // Initial fetch

    return () => clearInterval(interval);
  }, [userLocation]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Soil Data */}
        <Grid item xs={12} md={6}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Soil Conditions
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Moisture" 
                    secondary={`${soilData?.moisture * 100}%`} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Temperature" 
                    secondary={`${soilData?.temperature}°C`} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Nitrogen" 
                    secondary={`${soilData?.nitrogen} index`} 
                  />
                </ListItem>
              </List>
            </CardContent>
          </DashboardCard>
        </Grid>

        {/* Weather Data */}
        <Grid item xs={12} md={6}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Weather
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Condition" 
                    secondary={weatherData?.condition} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Temperature" 
                    secondary={`${weatherData?.temperature}°C`} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Humidity" 
                    secondary={`${weatherData?.humidity}%`} 
                  />
                </ListItem>
              </List>
            </CardContent>
          </DashboardCard>
        </Grid>

        {/* Farm Markets */}
        <Grid item xs={12}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nearby Farm Markets
              </Typography>
              <List>
                {markets.map((market) => (
                  <React.Fragment key={market.id}>
                    <ListItem>
                      <ListItemText
                        primary={market.name}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {market.address}
                            </Typography>
                            <br />
                            {`${market.distance} km away • ${market.hours}`}
                            <br />
                            {`Products: ${market.products.join(', ')}`}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </DashboardCard>
        </Grid>

        {/* Free Resources */}
        <Grid item xs={12}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Free Resources
              </Typography>
              {resources && Object.entries(resources).map(([type, offers]) => (
                <Box key={type} mb={2}>
                  <Typography variant="subtitle1" gutterBottom sx={{ textTransform: 'capitalize' }}>
                    {type}
                  </Typography>
                  <List>
                    {offers.map((offer) => (
                      <React.Fragment key={offer.id}>
                        <ListItem>
                          <ListItemText
                            primary={`${offer.provider} (${offer.distance} km away)`}
                            secondary={
                              <>
                                <Typography component="span" variant="body2" color="text.primary">
                                  {offer.location}
                                </Typography>
                                <br />
                                {`Quantity: ${offer.quantity}`}
                                <br />
                                {`Available until: ${offer.available_until}`}
                                <br />
                                {`Contact: ${offer.contact}`}
                              </>
                            }
                          />
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              ))}
            </CardContent>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FarmDataDashboard;
